const authService = require("../services/auth.service");

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({
      message: "Utilisateur créé",
      user,
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ message: error.message });
  }
};