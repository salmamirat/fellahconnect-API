const { validateBody } = require("../middlewares/validation.middleware");

const validateCreateProduit = validateBody(["nom", "categorie"]);
const validateUpdateProduit = validateBody(["nom", "categorie"]);

module.exports = { validateCreateProduit, validateUpdateProduit };
