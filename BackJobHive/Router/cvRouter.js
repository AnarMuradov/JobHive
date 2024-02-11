import express from "express";
import { createCvData, deleteCvDataById, getAllCvData, getCvDataById, updateCvDataById } from "../Controller/cvController.js";
export const cvRouter = express.Router();

cvRouter.get("/", getAllCvData);
  

cvRouter.get("/:id",getCvDataById);
   

cvRouter.post("/", createCvData);
  

cvRouter.put("/:id",updateCvDataById);
  

cvRouter.delete("/:id", deleteCvDataById);
  