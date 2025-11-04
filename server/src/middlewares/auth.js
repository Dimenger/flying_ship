import { verifyToken } from "../helpers/verify-token.helper.js";
import { User } from "../models/user.model.js";

export const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    }
    const verifyResult = verifyToken(token);
    const user = await User.findById(verifyResult.id);
    if (!user) {
      res.json({ message: "Authenticated user not found!" });
      return;
    }
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized" });
  }
};
