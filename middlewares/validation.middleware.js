const validate = (req, res, next) => {

    const body = req.body;

    for (const key in body) {

        if (
            body[key] === "" ||
            body[key] === null ||
            body[key] === undefined
        ) {

            return res.status(400).json({
                message: `${key} est obligatoire`
            });

        }

    }

    next();

};

module.exports = validate;