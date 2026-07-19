const { validateBody } = require("../middlewares/validation.middleware");

const validateCreateAgriculteur = validateBody(["nom", "telephone", "region", "userId"]);
const validateUpdateAgriculteur = validateBody(["nom", "telephone", "region"]);

module.exports = { validateCreateAgriculteur, validateUpdateAgriculteur };
