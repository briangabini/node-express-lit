import express, { Express, Request, Response } from "express";

const router = express.Router();

// other routes
import userRouter from "./User/UserRoutes.js";

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
  res.sendFile(path.join(__dirname, "..", "login.html"));
});

router.get("/admin", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "admin.html"));
});

router.use("/user", userRouter);

export default router;
