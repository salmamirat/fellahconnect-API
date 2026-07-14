const app = require("./app");
const { connectDB } = require("./config/database");

require("dotenv").config();


const PORT = process.env.PORT || 3000;


const startServer = async () => {

    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

};


startServer();