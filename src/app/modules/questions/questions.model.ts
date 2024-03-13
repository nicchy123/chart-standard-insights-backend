
import mongoose, { Schema, model } from "mongoose";
import { IQuestions } from "./questions.interface";



export const questionsSchema = new Schema<IQuestions>(
    {
        question: {
            type: String,
            required: true
        },
        questionType: {
            type: String,
            required: true
        },
        chartType: {
            type: String,
            required: true
        },
        questionIndex: {
            type: Number,
            required: true
        },
        survey: {
            type: String,
            required: true
        },
        questionText: {
            type: [String],
        },
        islibraryQuestion: {
            type: Boolean,
            required: true
        },
        isHidden: {
            type: Boolean,
            required: true
        },
        excludedCharts: {
            type: [mongoose.Schema.Types.Mixed]
        },
        comments: {
            type: [mongoose.Schema.Types.Mixed]
        },
    
        analysis: {
            type: String
        },
        imgList: {
            type: [String]
        },
        otherOptions: {
            type: [String]
        }
    }
);



export const Questions = model<IQuestions>("Questions", questionsSchema);
