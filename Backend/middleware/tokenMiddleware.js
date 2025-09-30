import jwt from "jsonwebtoken";

export const tokenHandler = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      let decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
    } catch (error) {
      res.status(401);
      throw new Error("Invalid Token !!");
    }
  } else {
    res.status(404);
    throw new Error("Token not found !!");
  }
};
