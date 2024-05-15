import express, { Request, Response } from "express";

import UserController from "../../controllers/UserController.js";

const userRouter = express.Router()

userRouter.post("/login", UserController.saveUser);

export default userRouter;