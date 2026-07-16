const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    if (!allowedRoles.includes(req.user.roleName)) {
      return res.status(403).json({ message: "Forbidden: insufficient permissions" });
    }

    next();
  };
};

module.exports = { authorizeRoles };