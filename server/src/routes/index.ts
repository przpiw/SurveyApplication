import {Request,Response} from 'express'
import express from 'express'

import auth from './auth.routes'
import user from './user.routes'
import participants from './participants.routes'
import groups from './group.routes'

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
router.use(participants)
router.use(groups)

export default router;