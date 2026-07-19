const { validateBody } = require("../middlewares/validation.middleware");

const validateCreateParcelle = validateBody(["nom", "superficie", "region", "agriculteurId"]);
const validateUpdateParcelle = validateBody(["nom", "superficie", "region"]);

module.exports = { validateCreateParcelle, validateUpdateParcelle };
