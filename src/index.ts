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
});
