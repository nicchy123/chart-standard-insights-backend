import express from "express";
import { QuestionsControllers } from "./questions.controller";


export const questionsRouter = express.Router();



questionsRouter.get("/", QuestionsControllers.getAllQuestions);
