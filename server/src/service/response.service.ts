import { DocumentDefinition, FilterQuery, QueryOptions,UpdateQuery } from "mongoose";
import Response,{
  ResponseDocument,
  ResponseInput,
} from "../models/response.model";


export async function createResponse(input: DocumentDefinition<Omit<ResponseDocument,'createdAt' | 'updatedAt'>>){
let response = await Response.create(input)
if(response)
return response;
 throw new Error("error")
}

export async function findResponse(
  query: FilterQuery<ResponseDocument>,
  options: QueryOptions = { lean: true }
) {
    const result = await Response.findOne(query, {}, options);
    return result;
}
export async function findAllResponses(){
  const result = await Response.find({});
  return result
}

