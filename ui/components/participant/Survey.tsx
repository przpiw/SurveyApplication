import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addQuestionResponse, submitResponses } from "../../redux/actions/responseActions"
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

const Question = ({handleCompleted, questions})=>{
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const dispatch = useDispatch()

  const submitAndClear = () =>{
     setCurrentQuestionIndex(0)
     dispatch(submitResponses())
     handleCompleted();
  }

  const handleQuestionChange = (questionIndex:number,selectedAnswerIndex:number) =>{
     if(questionIndex<questions.length-1){ 
       dispatch(addQuestionResponse({questionNumber:questionIndex+1,responseIndex:selectedAnswerIndex}))
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
          <div key={index} className="m-12 flex shrink bg-blue-400  rounded-md w-24 h-24"> 
          <div onClick={()=>{handleQuestionChange(currentQuestionIndex,index)}} className='flex flex-col'>
          <img src="https://via.placeholder.com/150"/> 
            <p className="text-center">{item.body}</p>
          </div>
          </div>      
        )
      } </div></div>
  </>
  )  
}
const Survey = ({toggleSurvey}) =>{
const {loading,survey:{questions}} = useSelector((state) => state.survey);
return <div className=" w-full ">
       {!loading && 
      <Question handleCompleted={toggleSurvey} questions={questions}/>}
     </div>
          
}

export default Survey