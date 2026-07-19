const app = require("./app");
const sequelize = require("./config/database");
require("./models");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Authenticate database connection
    await sequelize.authenticate();
    console.log("Database connected successfully.")

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(
      "Unable to connect to the database or start the server:",
      error,
    );
    process.exit(1);
  }
}

startServer();
