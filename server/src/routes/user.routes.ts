import {createUserHandler,getCurrentUser} from "../controller/user.controller"
import validateResource from '../middleware/validateResource'
import { createUserSchema } from '../schema/user.schema'
import requireUser from '../middleware/requireUser'

import express from 'express'

const router = express.Router();


/**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  router.post('/api/users',validateResource(createUserSchema), createUserHandler)

  // Return logged user
  router.get('/api/me',requireUser,getCurrentUser)


  export default router