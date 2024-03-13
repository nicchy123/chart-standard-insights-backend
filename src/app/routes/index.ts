import { Router } from "express";
import { questionsRouter } from "../modules/questions/questions.route";
import { answerRouter } from "../modules/answers/answers.route";


export const router = Router();

const moduleRoutes = [

  {
    path: "/questions",
    route: questionsRouter,
  },
  {
    path: "/answers",
    route: answerRouter,
  },

];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
