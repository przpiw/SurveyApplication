import validateResource from '../middleware/validateResource'
import requireUser from '../middleware/requireUser'
import { getGroupsHandler,createGroupHandler } from '../controller/group.controller';
import { createGroupSchema } from '../schema/group.schema';

import express from 'express'

const router = express.Router();

 /**
   * @openapi
   * '/api/groups':
   *  get:
   *     tags:
   *     - Group
   *     summary: Get all groups 
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:        
   *       404:
   *         description: Groups not found
   */
  router.get("/api/groups/",requireUser,getGroupsHandler  )


/**
   * @openapi
   * '/api/group':
   *  post:
   *     tags:
   *     - Group
   *     summary: Create a group
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateGroupInput'
   *     responses:
   *      201:
   *        description: Created
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post("/api/group", [requireUser, validateResource(createGroupSchema)],
    createGroupHandler)


export default router