import { Request, Response } from "express";
import {
  CreateResponseInput,
  ReadResponseInput
} from "../schema/response.schema";
import logger from "../utils/logger"

import {
  createResponse,
  findAllResponses,
  findResponse,
} from "../service/response.service";

export async function createResponseHandler(
  req: Request<{}, {}, CreateResponseInput["body"]>,
  res: Response
) {
  try{
    const body = req.body;
    const product = await createResponse({...body});
    return res.status(201).send()
  }
  catch(e:any){
    logger.error(e)
    return res.status(409).send(e.message)  
}
}



export async function getResponsesHandler(
  req: Request,
  res: Response
) {
  const responses = await findAllResponses();

  if (!responses) {
    return res.sendStatus(404);
  }
  return res.send(responses);
}

