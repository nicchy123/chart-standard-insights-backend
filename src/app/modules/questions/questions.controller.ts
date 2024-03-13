
import { sendResponse } from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { QuestionsServices } from "./questions.service";



const getAllQuestions = catchAsync(async (req, res) => {

  const result = await QuestionsServices.getAllQuestionsFromDB()
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Questions was retrieved successfully!",
    data: result,
  });
});



export const QuestionsControllers = {

  getAllQuestions,

};
