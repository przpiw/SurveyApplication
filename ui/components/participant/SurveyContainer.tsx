import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { listParticipants } from "../../redux/actions/participantActions"
import { getSurveyDetails } from "../../redux/actions/surveyActions"
import Profile from "./Profile"
import Survey from "./Survey"
import {Toaster} from 'react-hot-toast'
const SurveyContainer = () =>{
  const [showSurvey,setShowSurvey] = useState(false)
  
  const toggleSurvey = () =>{
    setShowSurvey(!showSurvey)
}
  const dispatch = useDispatch()
  const {loading,error,participants} = useSelector((state) => state.participantList);
  
  useEffect(()=>{
      if(loading){
      dispatch(listParticipants())
      dispatch(getSurveyDetails())
      }
  },[])

   if(error){
     return error //FIXME
   }
    //FIXME display loader
  return (
    
    <div className='flex flex-col  pt-20 justify-center '>
      {!loading &&
      <div className='h-3/4 mx-auto space-between flex-wrap  flex flex-row '>     
      {!showSurvey ? participants.map((participant:object,index:number)=>
         <Profile participant={participant} key={index} toggleSurvey={toggleSurvey}/>
      ):<Survey toggleSurvey={toggleSurvey}/>}
      <Toaster/>
     </div>} </div>
    )
}

export default SurveyContainer