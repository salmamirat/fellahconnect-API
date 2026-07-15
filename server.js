const app = require("./app");
const sequelize = require("./config/database");
require("./models"); // Load models and associations
require("dotenv").config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Authenticate database connection                                                                                                                                                                                                                                                                                                                                                                                                                                         
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    // Sync database models if needed in development
    // Note: In production it is highly recommended to use migrations.
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync({ alter: true });
      console.log("Database models synchronized.");
    }

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database or start the server:", error);
    process.exit(1);
  }
}

startServer();
