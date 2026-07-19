const { validateBody } = require("../middlewares/validation.middleware");

const validateCreateRecolte = validateBody(["quantite", "dateRecolte", "parcelleId", "produitId"]);
const validateUpdateRecolte = validateBody(["quantite", "dateRecolte"]);

module.exports = { validateCreateRecolte, validateUpdateRecolte };
