import validateResource from '../middleware/validateResource'
import requireUser from '../middleware/requireUser'
import {createSurveyHandler, getSurveysHandler,findSurveyHandler} from '../controller/survey.controller'
import { createSurveySchema } from '../schema/survey.schema'

import express from 'express'

const router = express.Router();

 /**
   * @openapi
   * '/api/surveys':
   *  get:
   *     tags:
   *     - Survey
   *     summary: Get all surveys 
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:        
   *       404:
   *         description: Surveys not found
   */
  router.get("/api/surveys/",requireUser,getSurveysHandler  )


/**
   * @openapi
   * '/api/survey':
   *  post:
   *     tags:
   *     - Survey
   *     summary: Create a survey
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateSurveyInput'
   *     responses:
   *      201:
   *        description: Created
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post("/api/survey", [requireUser, validateResource(createSurveySchema)],
    createSurveyHandler)

/**
   * @openapi
   * '/api/survey/{id}':
   *  get:
   *     tags:
   *     - Survey
   *     summary: Get survey by id
   *     parameters:
   *      - name: id
   *        in: path
   *        description: Survey id
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:        
   *       404:
   *         description: Survey not found
   */
// @ts-ignore
router.get("/api/survey/:id",requireUser,findSurveyHandler)
export default router