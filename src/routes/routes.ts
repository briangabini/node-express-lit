import express, { Express, Request, Response } from "express";

const router = express.Router();

// path alternative
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// GET METHODS
router.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

router.get("/login", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

export default router;
