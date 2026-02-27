import express from "express";

const authRouter = ({ authServices }) => {
  const router = express.Router();

  router.post("/login", async (req, res) => {
    const credentials = req.body;
    const token = await authServices.login(credentials);
    if (!token) {
      throw new Error("No token received");
    }

    res.clearCookie("token");
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    console.log("LOGGED IN");
    return res.status(200).json({ message: "login successfull" });
  });
  return router;
};
export default authRouter;
