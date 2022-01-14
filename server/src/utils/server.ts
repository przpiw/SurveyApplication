import express from 'express'
import deserializeUser from '../middleware/deserializeUser';
//import routes from '../routes'
import cors from 'cors'
import  config from 'config'
import cookieParser from 'cookie-parser';
import router from '../routes/index';

function createServer(){
const app = express()

app.use(cors({
  origin:config.get('origin'),
  credentials:true
}))

app.use(cookieParser())
app.use(express.json())
app.use(deserializeUser)
app.use(express.urlencoded({extended:false}));
app.use(router)
return app
}

export default createServer