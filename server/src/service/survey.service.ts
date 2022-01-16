import { DocumentDefinition, FilterQuery, QueryOptions,UpdateQuery } from "mongoose";
import Survey,{
  SurveyDocument,
  SurveyInput,
} from "../models/survey.model";


export async function createSurvey(input: DocumentDefinition<Omit<SurveyDocument,'createdAt' | 'updatedAt'|'questions'>>){
  try{
    const user = await Survey.create(input)
    return user
 }
 catch(e:any){
   throw new Error(e)
 }
}

export async function findSurvey(
  query: FilterQuery<SurveyDocument>,
  options: QueryOptions = { lean: true },
  projection?: any | null
) {
    const result = await Survey.findOne(query, projection, options);
    return result;
}

export async function findSurveyById(
  query: FilterQuery<SurveyDocument>,
  options: QueryOptions = { lean: true }
) {
    const result = await Survey.findById(query, {}, options);
    return result;
}



export async function findAllSurveys(){
  const result = await Survey.find({});
  return result
}
