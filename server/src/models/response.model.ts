import mongoose from "mongoose";

export interface ResponseInput {
  response: [{
    questionNumber:Number,
    responseIndex:Number,
    timeTaken:Number
  }];
  completionTime: number;
  surveyId:string;
  participantId:string;
}

export interface ResponseDocument extends ResponseInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date; 
}

const responseSchema = new mongoose.Schema(
  {
    responses: [
      {
        questionNumber: {
          type: Number,
        },
        responseIndex: {
          type: Number,
        },
        timeTaken:{
          type:Number
        }
      },
    ],
    completionTime: {
      type: Number,
      required: false,
    },
    surveyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'survey',
    },
    participantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'participant',
    },
  },
  {
    timestamps: true,
  }
)

const Response = mongoose.model<ResponseDocument>("Response", responseSchema);

export default Response;