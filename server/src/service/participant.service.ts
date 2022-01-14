import { DocumentDefinition, FilterQuery, QueryOptions,UpdateQuery } from "mongoose";
import Participant,{
  ParticipantDocument,
  ParticipantInput,
} from "../models/participant.model";


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


// export async function findAndUpdateProduct(
//   query: FilterQuery<ProductDocument>,
//   update: UpdateQuery<ProductDocument>,
//   options: QueryOptions
// ) {
//   return Product.findOneAndUpdate(query, update, options);
// }

// export async function deleteProduct(query: FilterQuery<ProductDocument>) {
//   return Product.deleteOne(query);
// }