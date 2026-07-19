const { validateBody } = require("../middlewares/validation.middleware");

const validateCreateOffreVente = validateBody(["quantite", "prixSouhaite", "recolteId"]);
const validateUpdateOffreVente = validateBody(["quantite", "prixSouhaite"]);

module.exports = { validateCreateOffreVente, validateUpdateOffreVente };
