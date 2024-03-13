import { sendResponse } from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { AnswersServices } from "./answers.service";

const getAllAnswers = catchAsync(async (req, res) => {
  const result = await AnswersServices.getAllAnswersFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Answers was retrieved successfully!",
    data: result,
  });
});

const getAnswersByQuestionIndex = catchAsync(async (req, res) => {
  const result = await AnswersServices.getAnswersByQuestionIndex(Number(req.params.index));
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Answers was retrieved successfully!",
    data: result,
  });
});
const getAnswersByQuestionFour = catchAsync(async (req, res) => {
  const result = await AnswersServices.getAnswersByQuestionFour();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Answers was retrieved successfully!",
    data: result,
  });
});

export const AnswersControllers = {
  getAllAnswers,
  getAnswersByQuestionIndex,
  getAnswersByQuestionFour
};
