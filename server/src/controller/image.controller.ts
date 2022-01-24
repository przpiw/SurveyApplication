import { Request, Response } from "express";
import { gridFS } from "../utils/gridFSStorage";


export async function getImageHandler(
  req:Request<["params"]>,res:Response
){
  try{
    //@ts-ignore
    const filename = req.params.filename
    const gfsBucket = await gridFS() 
    const file = gfsBucket?.find({filename:filename}).toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: 'no files exist',
        })
      }
      if (
        files[0].contentType === 'image/jpeg' ||
        files[0].contentType === 'image/png'
      ) {
        //@ts-ignore
        gfsBucket.openDownloadStreamByName(req.params.filename).pipe(res)
      } else {
        res.status(404).json({
          err: 'Not an image',
        })
      }
  })
}
  catch(error){
    res.status(404).send(error)
  }  
}


