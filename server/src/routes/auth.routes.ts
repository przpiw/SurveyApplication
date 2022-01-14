import validateResource from '../middleware/validateResource'
import {createSessionSchema} from '../schema/session.schema'
import {createUserSessionHandler,deleteSessionHandler,getUserSessionHandler} from "../controller/session.controller"
import requireUser from '../middleware/requireUser'
import express from 'express'

const router = express.Router();

router.get('/api/sessions',requireUser,getUserSessionHandler)
router.delete('/api/sessions',requireUser,deleteSessionHandler)
router.post('/api/sessions',validateResource(createSessionSchema),createUserSessionHandler)

export default router;