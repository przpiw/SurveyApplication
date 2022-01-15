import validateResource from '../middleware/validateResource'
import requireUser from '../middleware/requireUser'
import {createResponseHandler, getResponsesHandler} from '../controller/response.controller'
import { createResponseSchema } from '../schema/response.schema'

import express from 'express'

const router = express.Router();

 /**
   * @openapi
   * '/api/responses':
   *  get:
   *     tags:
   *     - Response
   *     summary: Get all responses 
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:        
   *       404:
   *         description: Responses not found
   */
  router.get("/api/responses/",requireUser,getResponsesHandler  )


/**
   * @openapi
   * '/api/response':
   *  post:
   *     tags:
   *     - Response
   *     summary: Create a response
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateResponseInput'
   *     responses:
   *      201:
   *        description: Created
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post("/api/response", [requireUser, validateResource(createResponseSchema)],
    createResponseHandler)


export default router