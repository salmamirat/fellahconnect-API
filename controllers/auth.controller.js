const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Role } = require("../models");
const jwtConfig = require("../config/jwt");

const register = async (req, res, next) => {
  try {
    const { nom, email, password, roleId } = req.body;

    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      nom,
      email,
      password: hashedPassword,
      roleId: roleId || 2, // default to farmer role
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: { id: user.id, nom: user.nom, email: user.email, roleId: user.roleId },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [{ model: Role }],
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        roleId: user.roleId,
        roleName: user.Role ? user.Role.nom : null,
      },
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiresIn }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, nom: user.nom, email: user.email, role: user.Role?.nom },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };