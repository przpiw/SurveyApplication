import {Request,Response} from 'express'
import express from 'express'

import auth from './auth.routes'
import user from './user.routes'
import participant from './participant.routes'
import group from './group.routes'
import survey from './survey.routes'
import response from './response.routes'
import image from './image.routes'
const router = express.Router();
  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
router.get('/healthcheck',(req:Request,res:Response)=>res.sendStatus(200))

router.use(auth)
router.use(user)
router.use(participant)
router.use(group)
router.use(survey)
router.use(response)
router.use(image)
export default router;