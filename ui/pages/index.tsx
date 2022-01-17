// @ts-ignore
import type {  NextPage } from 'next'
import Navbar from '../components/Navbar'
import { useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getUserDetails } from '../redux/actions/userActions';
import SurveyContainer  from '../components/participant/SurveyContainer'

const Home: NextPage = () => {
   const dispatch = useDispatch()
   const {loading,error} = useSelector((state) => state.loggedUser); 
   
   useEffect(() => {
    dispatch(getUserDetails())
   }, []) 
 
   if(error)
   return error //FIXME

   return(
     !loading  && 
     <div className="main h-screen bg-gray-200 ">
      <Navbar/>
      {!loading && <SurveyContainer/>}
     </div>
   )
};

export default Home;