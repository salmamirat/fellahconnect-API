const app = require("./app");
const sequelize = require("./config/database");
require("./models"); // Load models and associations
require("dotenv").config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
<<<<<<< HEAD
    // Authenticate database connection                                                                                                                                                                                                                                                                                                                                                                                                                                         
=======
>>>>>>> 75b31b80b5ad395d3d9aedffa09a96070555362f
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync({ alter: true });
      console.log("Database models synchronized.");
    }

  
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database or start the server:", error);
    process.exit(1);
  }
}

startServer();
