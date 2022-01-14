// @ts-ignore
import type {  NextPage } from 'next'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { listParticipants } from '../redux/actions/participantActions';

const items = [1,2,5,5,5,5,5,5,]
const Profile = ({toggleSurvey}) =>{
return <div onClick={()=>{toggleSurvey()}} className=" p-4 ">
           <div className="flex shrink bg-blue-200 rounded-md w-24 h-24">
             <img src="https://via.placeholder.com/150"/>
             </div>
             <h3 className='text-lg font-medium text-gray-800 text-center'>John</h3>
             </div>
}


const Survey = ({toggleSurvey}) =>{
return <div className=" w-full ">
  <h1 className='text-center text-4xl'>Question</h1>

            <div className='flex flex-col  pt-20 justify-center '>
      <div className='h-3/4 mx-auto space-between flex-wrap  flex flex-row '>
        
      {items.map((item,index)=>
         <div key={index} className="m-4 flex shrink bg-blue-400  rounded-md w-24 h-24"> 
         <img src="https://via.placeholder.com/150"/> 
         </div>      
      )

    }  <button onClick={()=>toggleSurvey()}>Complete</button>
     </div></div>
     </div>
           
}


const Home: NextPage = () => {
  const [showSurvey,setShowSurvey] = useState(false)
  const toggleSurvey = () =>{console.log("toggle")
  
    setShowSurvey(!showSurvey)
}
   const dispatch = useDispatch() 
   useEffect(() => {
    dispatch(listParticipants("12"))
   }, [])
  return (<div className="main h-screen bg-gray-200 ">
    <Navbar/>
    <div className='flex flex-col  pt-20 justify-center '>
      <div className='h-3/4 mx-auto space-between flex-wrap  flex flex-row '>
        
      {showSurvey ? items.map((item,index)=>
         <Profile key={index} toggleSurvey={toggleSurvey}/>
      ):<Survey toggleSurvey={toggleSurvey}/>

    } 
     </div></div>
      
  </div>)
  
};

export default Home;