
import mongoose, {  model } from "mongoose";
import { IAnswer } from "./answers.interface";


const answerSchema = new mongoose.Schema({
    submissionId: {
        type: Number,
        required: true
    },
    questionIndex: {
        type: Number,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    other: {
        type: Boolean,
        required: true
    },
    otherField: {
        type: String,
    },
    survey: {
        type: String,
        required: true
    }
});



export const Answers = model<IAnswer>("Answers", answerSchema);
