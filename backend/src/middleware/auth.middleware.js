import jwt from "jsonwebtoken";

const authMiddleWare = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return next(new Error("No token provided"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;

    next();
  } catch (err) {
    next(err);
  }
};

export default authMiddleWare;
