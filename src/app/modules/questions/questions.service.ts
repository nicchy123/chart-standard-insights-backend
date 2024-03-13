import { Questions } from "./questions.model";


const getAllQuestionsFromDB = async () => {
  const result = await Questions.find({}).sort("questionIndex");
  return result;
};



export const QuestionsServices = {
    getAllQuestionsFromDB
};
