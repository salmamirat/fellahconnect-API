const { validateBody } = require("../middlewares/validation.middleware");

const validateCreatePrixMarche = validateBody(["prix", "datePrix", "produitId", "marcheId"]);
const validateUpdatePrixMarche = validateBody(["prix", "datePrix"]);

module.exports = { validateCreatePrixMarche, validateUpdatePrixMarche };
