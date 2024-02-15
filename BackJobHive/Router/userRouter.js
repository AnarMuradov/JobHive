import express from "express";
import {
  createUser,
  deleteUserById,
  getAllUserData,
  getUserById, 
  updateUserById,
} from "../Controller/userController.js";
import { authMiddleware } from "../Middleware/AuthMiddleware.js";
export const userRouter = express.Router();

userRouter.get("/", getAllUserData);

userRouter.get("/:id",authMiddleware(["Admin"]), getUserById);

userRouter.post("/", createUser);
 
userRouter.put("/:id",authMiddleware(["User","Admin"]), updateUserById);

userRouter.delete("/:id",authMiddleware(["Admin"]), deleteUserById);
