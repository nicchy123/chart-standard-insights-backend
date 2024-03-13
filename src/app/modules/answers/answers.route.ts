import express from "express";
import { AnswersControllers } from "./answers.controller";

export const answerRouter = express.Router();

answerRouter.get("/",  AnswersControllers.getAllAnswers);

answerRouter.get("/four/new", AnswersControllers.getAnswersByQuestionFour)
answerRouter.get("/:index", AnswersControllers.getAnswersByQuestionIndex)
