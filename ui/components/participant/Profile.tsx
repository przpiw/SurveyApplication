import PropTypes from 'prop-types'

const Profile = ({participant,toggleSurvey}) =>{

return <div onClick={()=>{toggleSurvey()}} className=" p-4 ">
           <div className="flex shrink bg-blue-200 rounded-md w-24 h-24">
             <img src={participant.imageURL}/>
             </div>
             <h3 className='text-lg font-medium text-gray-800 text-center'>{participant.firstname}</h3>
             </div>
}
Profile.propTypes = {
  toggleSurvey: PropTypes.func,
  participant:PropTypes.object
}
export default Profile 