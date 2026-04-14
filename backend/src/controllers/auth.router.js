import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
const isProduction = process.env.NODE_ENV === "production";

const authRouter = ({ authServices }) => {
  const router = express.Router();

  router.post("/login", async (req, res) => {
    const credentials = req.body;
    const token = await authServices.login(credentials);

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
    });

    return res.status(200).json({ message: "login successfull" });
  });
  router.get("/verify", authMiddleware, async (req, res) => {
    res.status(200).json({ message: "cookie verified" });
  });
  return router;
};
export default authRouter;
