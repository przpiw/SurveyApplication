import PropTypes from 'prop-types'
import { useDispatch,useSelector } from 'react-redux'
import { setActiveParticipant } from '../../redux/actions/participantActions'
import Image from 'next/image'
import { imgLoader } from '../../helpers/imgLoader'

const Profile = ({participant,toggleSurvey}) =>{
const dispatch = useDispatch()
const {survey:{resubmitAfter}} = useSelector((state) => state.survey);

 const isNextAttemptAllowed = () => {
    let timePassed =
      Math.floor(Date.now() / 1000 / 60) -
      Math.floor(Date.parse(participant.lastSubmit) / 1000 / 60)
    let timeLeft = 1 - timePassed
    return timeLeft > 0 ? false : true
  }

const handleClick = () =>{
  if(isNextAttemptAllowed()){
  dispatch(setActiveParticipant(participant))
  toggleSurvey();
  }
  //display message not ready
}
return <div onClick={()=>handleClick()} className=" p-4 ">
           <div className="flex shrink  rounded-md w-24 h-24">
             {isNextAttemptAllowed() ?
             <Image loader={imgLoader} src={participant.imageURL} width={100} height={100} quality={100}/> :
             <Image loader={imgLoader} src={'https://freepngimg.com/thumb/green_tick/27889-3-green-tick-thumb.png'} width={100} height={100} quality={100}/> }
             
             </div>
             <h3 className='text-lg font-medium text-gray-800 text-center'>{participant.firstname}</h3>
             </div>
}
Profile.propTypes = {
  toggleSurvey: PropTypes.func,
  participant:PropTypes.object
}
export default Profile 