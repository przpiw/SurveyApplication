import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { string } from "zod";
import { UserDocument } from "./user.model";


export interface SurveyInput {
  name: string;
  category: string,
  resubmitAfter: Number;
  questions: [];
}

export interface SurveyDocument extends SurveyInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const answerSchema = new mongoose.Schema({
  answerNumber: {
    type: Number,
  },
  body: {
    type: String,
  },
  imgURL: {
    type: String,
  },
})

const questionSchema = new mongoose.Schema({
  questionNumber: {
    type: Number,
  },
  question: {
    type: String,
  },
  category: {
    type: String,
  },
  answers: [
    {
      type: answerSchema,
    },
  ],
})

const surveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'student',
      required: false,
      default:null
    },
    //Minutes to resubmit
    resubmitAfter: {
      type: Number,
      default: 1,
    },
    questions: [
      {
        type: questionSchema,
      },
    ],
    isArchived:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  }
)




const Survey = mongoose.model<SurveyDocument>("Survey", surveySchema);

export default Survey;