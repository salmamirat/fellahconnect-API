const { validateBody } = require("../middlewares/validation.middleware");

const validateRegister = validateBody(["nom", "email", "password", "roleId"]);
const validateLogin = validateBody(["email", "password"]);

module.exports = { validateRegister, validateLogin };
