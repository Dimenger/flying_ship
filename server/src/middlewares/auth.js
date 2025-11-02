import { verifyToken } from "../helpers/verify-token.helper";
import { User } from "../models/user.model";

export const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    }
    const verifyResult = verifyToken(token);
    const user = await User.findOne({ _id: verifyResult });
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
