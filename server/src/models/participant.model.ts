import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { string } from "zod";
import { GroupDocument } from "./group.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface ParticipantInput {
  firstname: string,
  lastname: string;
  imageURL: string;
  //groupId: GroupDocument["id"];
}

export interface ParticipantDocument extends ParticipantInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date; 
}

const participantSchema = new mongoose.Schema(
  { 
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    imageURL: { type: String, required: true },
    lastSubmit: { type: Date,default:null},
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'group',
      default:null
    },
    isArchived:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  }
);

const Participant = mongoose.model<ParticipantDocument>("Participant", participantSchema);

export default Participant;