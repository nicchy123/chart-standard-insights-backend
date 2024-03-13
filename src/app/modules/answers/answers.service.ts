import { Answers } from "./answers.model";


const getAllAnswersFromDB = async () => {
  const result = await Answers.find({});
  return result;
};


const getAnswersByQuestionIndex = async (index:number) => {
  const result = await Answers.find({
    questionIndex: index
  });

  return result;
}

const getAnswersByQuestionFour = async () => {
  // Retrieve the total count of responses for questionIndex 3
  const totalResponses = await Answers.countDocuments({ questionIndex: 3, answer: { $ne: "" } });

  // Aggregate to get the count of each answer option for questionIndex 3
  const result = await Answers.aggregate([
    {
      $match: {
        questionIndex: 3,
        answer: { $ne: "" }
      }
    },
    {
      $group: {
        _id: "$answer", // Group by answer
        count: { $sum: 1 } // Count occurrences of each answer
      }
    },
    {
      $project: {
        _id: 0,
        answer: "$_id",
        count: 1,
        percentage: { $multiply: [{ $divide: ["$count", totalResponses] }, 100] } // Calculate percentage
      }
    }
  ]);

  // Ensure that the sum of all percentages is 100
  const totalPercentage = result.reduce((acc, item) => acc + item.percentage, 0);
  const adjustmentFactor = 100 / totalPercentage;

  // Adjust percentages to ensure that the sum is 100
  const adjustedResult = result.map(item => ({
    ...item,
    percentage: item.percentage * adjustmentFactor
  }));

  return adjustedResult;
};



export const AnswersServices = {
    getAllAnswersFromDB,
    getAnswersByQuestionIndex,
    getAnswersByQuestionFour
};
