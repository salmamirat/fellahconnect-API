const logger = (req, res, next) => {

    console.log("========== Nouvelle Requête ==========");
    console.log("Méthode :", req.method);
    console.log("URL :", req.originalUrl);
    console.log("Date :", new Date().toLocaleString());

    next();

};

module.exports = logger;