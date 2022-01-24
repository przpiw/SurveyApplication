//@ts-nocheck
import React from 'react'
import { useSelector } from 'react-redux';
import Question from './Question'

interface IAnswer {
  _id:string,
  body:string,
  answerNumber:number,
  timeTaken:number
}
interface IQuestion {
  body:string
  imageURL:string
  answers: [IAnswer]
}


const Survey = ({toggleSurvey}) =>{
const {loading,survey:{questions,_id}} = useSelector((state) => state.survey);
const start = Date.now();
// Returns time taken to complete survey
const handleComplete = () =>{
  toggleSurvey()
  return Math.round((Date.now() - start) / 1000) 
}
return <div className=" w-full ">
       {!loading && 
      <Question handleCompleted={handleComplete} surveyId={_id} questions={questions}/>}
     </div>         
}

export default Survey