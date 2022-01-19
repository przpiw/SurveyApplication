import requireUser from '../middleware/requireUser'
import express from 'express'
import { getImageHandler } from '../controller/image.controller';

const router = express.Router();

/**
   * @openapi
   * '/api/image/{filename}':
   *  get:
   *     tags:
   *     - Image
   *     summary: Get image
   *     parameters:
   *      - name: filename
   *        in: path
   *        description: The filename
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           image/jpeg:
   *           type: string
   *           format: byte      
   *       404:
   *         description: Image not found
   */
//@ts-ignore
router.get("/api/image/:filename",requireUser,getImageHandler)
export default router