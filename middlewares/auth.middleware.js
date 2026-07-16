const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Access token missing" });
  }

  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // decoded: { id, roleId, roleName }
    req.user = decoded;
    next();
  });
};

module.exports = { authenticateToken };