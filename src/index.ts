import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile("index.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
