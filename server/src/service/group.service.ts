import { DocumentDefinition, FilterQuery, QueryOptions,UpdateQuery } from "mongoose";
import Group,{
  GroupDocument,
  GroupInput,
} from "../models/group.model";


export async function createGroup(input: DocumentDefinition<Omit<GroupDocument, |'createdAt' | 'updatedAt'>>){
let group = await Group.create(input)
if(group)
return group;
 throw new Error("Group could not be created")
}

export async function findGroup(
  query: FilterQuery<GroupDocument>,
  options: QueryOptions = { lean: true }
) {
    const result = await Group.findOne(query, {}, options);
    return result;
}
export async function findAllGroups(){
  const result = await Group.find({});
  return result
}

