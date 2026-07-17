const app = require("./app");
const sequelize = require("./config/database");
require("./models"); // Load models and associations
require("dotenv").config();
const PORT = process.env.PORT || 3000;
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    // sync() intentionally disabled — migrations are the schema source of truth.
    // Re-enabling this corrupts foreign key constraints outside of version control.
    //
    // if (process.env.NODE_ENV === "development") {
    //   await sequelize.sync({ alter: true });
    //   console.log("Database models synchronized.");
    // }

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
