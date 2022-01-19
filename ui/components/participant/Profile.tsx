import PropTypes from 'prop-types'
import { useDispatch,useSelector } from 'react-redux'
import { setActiveParticipant } from '../../redux/actions/participantActions'
import Image from 'next/image'
import { imgLoader } from '../../helpers/imgLoader'
import toast from 'react-hot-toast'

const Profile = ({participant,toggleSurvey}) =>{
const dispatch = useDispatch()
const {survey:{resubmitAfter}} = useSelector((state) => state.survey);

const nextAttempTime = () =>{


 let timePassed =
    Math.floor(Date.now() / 1000 / 60) -
    Math.floor(Date.parse(participant.lastSubmit) / 1000 / 60)
  return resubmitAfter - timePassed
}
const isNextAttemptAllowed = () => {
  return nextAttempTime() > 0 ? false : true
}

const handleClick = () =>{
  if(1){
  dispatch(setActiveParticipant(participant))
  toggleSurvey();
  }
  else{
    const timeInMinutes = nextAttempTime();
    const hours = (nextAttempTime() / 60).toFixed(0);
    const minutes = (nextAttempTime() % 60).toFixed(0);
    toast.error("Try again in " + hours + " hours " + minutes+ " minutes")
  }
  toast.error
  //display message not ready
}
return <div key={participant._id} onClick={()=>handleClick()} className=" p-6 ">
          <div className="flex flex-col shrink shadow-sm rounded-md w-28 ">
            <Image  loader={imgLoader} src={`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/image/${participant.firstname}_${participant.lastname}`} width={200} height={200} className={ !isNextAttemptAllowed() ? "opacity-100 rounded-full" : 'opacity-50 '  } quality={100}/>
            <h3 className='text-lg font-medium text-gray-700 text-center'>{participant.firstname}</h3>

          </div>
        </div>
}
Profile.propTypes = {
  toggleSurvey: PropTypes.func,
  participant:PropTypes.object
}
export default Profile 