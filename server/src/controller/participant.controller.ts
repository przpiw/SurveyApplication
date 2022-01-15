import { Request, Response } from "express";
import {
  CreateParticipantInput,
  ReadParticipantInput
} from "../schema/participant.schema";
import logger from "../utils/logger"

import {
  createParticipant,
  findAllParticipants,
  findParticipant,
  findParticipants
} from "../service/participant.service";

export async function createParticipantHandler(
  req: Request<{}, {}, CreateParticipantInput["body"]>,
  res: Response
) {
  try{
    const body = req.body;
    const product = await createParticipant({...body});
    return res.status(201).send()
  }
  catch(e:any){
    logger.error(e)
    return res.status(409).send(e.message)  
}
}



export async function findParticipantHandler(
  req: Request<["params"]>,
  res: Response
) {
  const groupId = req.params.groupId;

  const participants = await findParticipants({ groupId },{});

  if (!participants) {
    return res.sendStatus(404);
  }
  
  return res.send(participants);
}

export async function getParticipantsHandler(
  req: Request,
  res: Response
) {
  
  const participants = await findAllParticipants();

  if (!participants) {
    return res.sendStatus(404);
  }
  return res.send(participants);
}




// export async function deleteProductHandler(
//   req: Request<UpdateProductInput["params"]>,
//   res: Response
// ) {
//   const userId = res.locals.user._id;
//   const productId = req.params.productId;

//   const product = await findProduct({ productId });

//   if (!product) {
//     return res.sendStatus(404);
//   }

//   if (String(product.user) !== userId) {
//     return res.sendStatus(403);
//   }

//   await deleteProduct({ productId });

//   return res.sendStatus(200);
// }