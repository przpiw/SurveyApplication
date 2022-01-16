import { Request, Response } from "express";
import {
  CreateSurveyInput,
  UpdateSurveyInput,
} from "../schema/survey.schema";
import {
  createSurvey, 
  findAllSurveys,
  findSurvey,
  findSurveyById
} from "../service/survey.service";

export async function createSurveyHandler(
  req: Request<{}, {}, CreateSurveyInput["body"]>,
  res: Response
) {

  const body = req.body;

  const survey = await createSurvey({ ...body});

  return res.send(survey);
}

export async function getSurveysHandler(
  req: Request,
  res: Response
) {
  
  const surveys = await findAllSurveys();

  if (!surveys) {
    return res.sendStatus(404);
  }
  return res.send(surveys);
}


// export async function updateSurveyHandler(
//   req: Request<UpdateSurveyInput["params"]>,
//   res: Response
// ) {
//   const userId = res.locals.user._id;

//   const surveyId = req.params.surveyId;
//   const update = req.body;

//   const survey = await findSurvey({ surveyId });

//   if (!survey) {
//     return res.sendStatus(404);
//   }

//   if (String(survey.user) !== userId) {
//     return res.sendStatus(403);
//   }

//   const updatedSurvey = await findAndUpdateSurvey({ surveyId }, update, {
//     new: true,
//   });

//   return res.send(updatedSurvey);
// }

export async function findSurveyHandler(
  req: Request<UpdateSurveyInput["params"]>,
  res: Response
) {
  const _id = req.params.id;
  const survey = await findSurvey({ _id },{},'_id resubmitAfter name questions');

  if (!survey) {
    return res.sendStatus(404);
  }
  return res.send(survey);
}

// export async function deleteSurveyHandler(
//   req: Request<UpdateSurveyInput["params"]>,
//   res: Response
// ) {
//   const userId = res.locals.user._id;
//   const surveyId = req.params.surveyId;

//   const survey = await findSurvey({ surveyId });

//   if (!survey) {
//     return res.sendStatus(404);
//   }

//   if (String(survey.user) !== userId) {
//     return res.sendStatus(403);
//   }

//   await deleteSurvey({ surveyId });

//   return res.sendStatus(200);
// }