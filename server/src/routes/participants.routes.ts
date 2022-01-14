import validateResource from '../middleware/validateResource'
import requireUser from '../middleware/requireUser'
import {createParticipantHandler, getParticipantsHandler} from '../controller/participant.controller'
import { createParticipantSchema } from '../schema/participant.schema'

import express from 'express'

const router = express.Router();

 /**
   * @openapi
   * '/api/participants':
   *  get:
   *     tags:
   *     - Participant
   *     summary: Get all participants 
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:        
   *       404:
   *         description: Participants not found
   */
  router.get("/api/participants/",requireUser,getParticipantsHandler  )


/**
   * @openapi
   * '/api/participant':
   *  post:
   *     tags:
   *     - Participant
   *     summary: Create a participant
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateParticipantInput'
   *     responses:
   *      201:
   *        description: Created
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post("/api/participant", [requireUser, validateResource(createParticipantSchema)],
    createParticipantHandler)


export default router