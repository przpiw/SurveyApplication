import { Request, Response } from "express";
import {
  CreateGroupInput,
  ReadGrouptInput
} from "../schema/group.schema";

import {
  createGroup,
  findAllGroups,
  findGroup,
} from "../service/group.service";
import logger from "../utils/logger"

export async function createGroupHandler(
  req: Request<{}, {}, CreateGroupInput["body"]>,
  res: Response
) {
  try{
    const body = req.body
    await createGroup({...body});
    return res.status(201).send()
  }
  catch(e:any){
    logger.error(e)
    return res.status(409).send(e.message)  
}
}


export async function getGroupsHandler(
  req: Request,
  res: Response
) {
  
  const groups = await findAllGroups();

  if (!groups) {
    return res.sendStatus(404);
  }
  return res.send(groups);
}


export async function findGroupHandler(
  req: Request<ReadGrouptInput["params"]>,
  res: Response
) {
  const _id = req.params.id;
  const group = await findGroup({ _id },{},'surveyId');

  if (!group) {
    return res.sendStatus(404);
  }
  return res.send(group);
}




