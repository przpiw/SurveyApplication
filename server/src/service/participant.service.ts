import { DocumentDefinition, FilterQuery, QueryOptions,UpdateQuery} from "mongoose";
import Participant,{
  ParticipantDocument,
  ParticipantInput,
} from "../models/participant.model";
import { gridFS } from "../utils/gridFSStorage";

export async function updateLastSubmit(studentId:string){
  await Participant.findByIdAndUpdate({_id:studentId},{lastSubmit:Date.now()})
}

export async function createParticipant(input: DocumentDefinition<Omit<ParticipantDocument,'createdAt' | 'updatedAt'>>){
let participant = await Participant.create(input)
if(participant)
return participant;
 throw new Error("error")
}

export async function findParticipant(
  query: FilterQuery<ParticipantDocument>,
  options: QueryOptions = { lean: true }
) {
    const result = await Participant.findOne(query, {}, options);
    return result;
}
export async function findAllParticipants(){
  const result = await Participant.find({});
  return result
}

export async function findParticipants(
  query: FilterQuery<ParticipantDocument>,
  options: QueryOptions,
  projection?: any | null,)
  {
  return Participant.find(query,projection,options)
}




// export async function findAndUpdateParticipant(
//   query: FilterQuery<ParticipantDocument>,
//   update: UpdateQuery<ParticipantDocument>,
//   options: QueryOptions
// ) {
//   return Participant.findOneAndUpdate(query, update, options);
// }

// export async function deleteParticipant(query: FilterQuery<ParticipantDocument>) {
//   return Participant.deleteOne(query);
// }