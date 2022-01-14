import mongoose from "mongoose";
import { string } from "zod";



export interface GroupInput {
  name: string
  //surveyId: string,
}

export interface GroupDocument extends GroupInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surveyId: { type: mongoose.Schema.Types.ObjectId, ref: "Survey", default:null },
  },
  {
    timestamps: true,
  }
);
const Group = mongoose.model<GroupDocument>("Group", groupSchema);

export default Group;