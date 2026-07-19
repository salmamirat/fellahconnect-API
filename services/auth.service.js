const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Role } = require("../models");
const jwtConfig = require("../config/jwt");

/**
 * Register a new user
 */
exports.register = async (data) => {
  const { nom, email, password, roleId } = data;

  // Check if email already exists
  const existUser = await User.findOne({ where: { email } });
  if (existUser) {
    const error = new Error("Email existe déjà");
    error.statusCode = 400;
    throw error;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    nom,
    email,
    password: hashedPassword,
    roleId,
  });

  return {
    id: user.id,
    nom: user.nom,
    email: user.email,
  };
};

/**
 * Login user and return JWT token
 */
exports.login = async (email, password) => {
  // Find user with role
  const user = await User.findOne({
    where: { email },
    include: [{ model: Role }],
  });

  if (!user) {
    const error = new Error("Email incorrect");
    error.statusCode = 401;
    throw error;
  }

  // Verify password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    const error = new Error("Mot de passe incorrect");
    error.statusCode = 401;
    throw error;
  }

  // Generate token
  const token = jwt.sign(
    { id: user.id, role: user.Role.nom },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expiresIn }
  );

  return {
    token,
    user: {
      id: user.id,
      nom: user.nom,
      email: user.email,
      role: user.Role.nom,
    },
  };
};
