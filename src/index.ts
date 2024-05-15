import "reflect-metadata";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// path alternative
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// import data source
import { AppDataSource } from "./data-source.js";
// for testing the db
import { User } from "./models/User.js";

// routes
import router from "./routes/routes.js";

const app = express();

// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // initiallize data source
  AppDataSource.initialize()
    .then(async () => {
      // here you can start to work with your database
      console.log("Database connected");

      const user = new User();
      user.name = "test";
      user.password = "test";

      await AppDataSource.manager.save(user);
      console.log("User saved successfully");

    })
    .catch((error) => console.log(error));
});
