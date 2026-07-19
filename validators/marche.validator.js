const { validateBody } = require("../middlewares/validation.middleware");

const validateCreateMarche = validateBody(["nom", "ville", "region"]);
const validateUpdateMarche = validateBody(["nom", "ville", "region"]);

module.exports = { validateCreateMarche, validateUpdateMarche };
