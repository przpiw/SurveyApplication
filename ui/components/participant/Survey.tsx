import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addQuestionResponse, submitResponses } from "../../redux/actions/responseActions"
import { imgLoader } from '../../helpers/imgLoader'
import Image from 'next/image'
import toast from 'react-hot-toast'

interface IAnswer {
  _id:string,
  body:string,
  answerNumber:number
}
interface IQuestion {
  body:string
  imageURL:string
  answers: [IAnswer]
}

const Question = ({handleCompleted, surveyId, questions})=>{
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const dispatch = useDispatch()
  const start = Date.now();
  const {message,error} = useSelector((state) => state.response);

  const submitAndClear = () =>{
     setCurrentQuestionIndex(0)    
     const timeTaken = handleCompleted()
     dispatch(submitResponses(surveyId,timeTaken))
     
     toast.success('Thank you!')

  }

  if(error)
  return toast.error(error)

  const handleQuestionChange = (questionIndex:number,selectedAnswerIndex:number) =>{
     if(questionIndex<questions.length-1){ 
       const timeTaken = Date.now() - start
       dispatch(addQuestionResponse({questionNumber:questionIndex+1,responseIndex:selectedAnswerIndex,timeTaken}))
        if(questionIndex!==questions.length-1) 
        setCurrentQuestionIndex(questionIndex+1)               
     } else submitAndClear()
  }
  return(
    <>
    
     <h1 className='text-center text-2xl md:text-4xl '>{questions[currentQuestionIndex].question}</h1>
       <div className='flex flex-col  pt-20 justify-center '>
      <div className='h-3/4 mx-auto space-between flex-wrap  flex flex-row '>

     {questions[currentQuestionIndex].answers.map((item:IAnswer,index:number)=>
     <div className="flex flex-col mx-2">
    <div key={index} onClick={()=>handleQuestionChange(currentQuestionIndex,index)} className=" flex shrink  rounded-md w-24 h-24"> 
      <Image loader={imgLoader} src={'https://via.placeholder.com/150'} width={150} height={150} quality={100}/> 
    
   
     </div>   
        <p className="text-center">{item.body}</p>     
  </div>
     )} </div></div>
  </>  
  )  
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