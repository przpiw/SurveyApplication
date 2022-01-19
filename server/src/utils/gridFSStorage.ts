import mongoose from 'mongoose'
import {GridFsStorage} from 'multer-gridfs-storage'
import multer from 'multer'
import config from 'config'




const gridFS = async () =>{
  const dbUri = config.get<string>("dbUri")
  const conn = await (await mongoose.connect(dbUri)).connection;

if (conn)
  return new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'photos',
  })
else console.error('unable to connect')
}

const storage = new GridFsStorage({
  url: config.get<string>("dbUri"),
  options: { useNewUrlParser: true, useInifiedTopology: true },
  file: (req, file) => {
    const fileInfo = {
      filename: file.originalname,
      bucketName: 'photos',
    }
    return fileInfo
  },
})

const upload = multer({ storage })

export { upload, gridFS }