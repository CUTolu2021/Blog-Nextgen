const jwt = require("jsonwebtoken");

const createAuthenticationToken = async (req, res) => {
  const user = { ...req };
  console.log(user._doc);
  const token = jwt.sign(user._doc, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
  return res.status(200).json({
    success: true,
    token,
    user: req,
  });
};

const verifyJWTAuthToken = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Kindly login" });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Unauthorized" });
    req.user = user;
    next();
  });
};

const restrictTo = (allowedRolesArray) => (req, res, next) => {
  // Check if req.user.role is in allowedRolesArray, if yes move on to next, if not return with unauthorized
  if (!allowedRolesArray.includes(req.user.role)) {
    return res.status(401).json({ message: "Unauthoirized" });
  }
  next();
};

module.exports = {
  createAuthenticationToken,
  verifyJWTAuthToken,
  restrictTo,
};
