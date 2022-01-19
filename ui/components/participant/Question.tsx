import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addQuestionResponse, submitResponses } from "../../redux/actions/responseActions"
import Image from 'next/image'
import { imgLoader } from '../../helpers/imgLoader'
import toast from 'react-hot-toast'


const Question = ({handleCompleted, surveyId, questions})=>{
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const dispatch = useDispatch()
  const start = Date.now();

  const submitAndClear = () =>{
     setCurrentQuestionIndex(0)    
     const timeTaken = handleCompleted()
     dispatch(submitResponses(surveyId,timeTaken))
     toast.success('Thank you!')
  }


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
     <div className="flex flex-col mx-8 my-4">
          <div key={index} onClick={()=>handleQuestionChange(currentQuestionIndex,index)} className=" shadow-sm flex flex-col w-24 "> 
          <Image loader={imgLoader} src={'https://via.placeholder.com/150'} width={150} height={150} quality={100}/>
           <p className="text-center">{item.body}</p> 
        </div>     
  </div>
     )} </div></div>
  </>  
  )  
}

Question.propTypes = {
  handleCompleted: PropTypes.func,
  surveyId:PropTypes.object,
  questions: PropTypes.object
}
export default Question