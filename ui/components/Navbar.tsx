import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import {useAuth} from '../hooks/useAuth'
import useUser from '../hooks/useUser'
import  { useRouter } from 'next/router'

interface User{
  _id:string;
  email:string;
  name:string;
  createdAt:Date;
  updatedAt:Date;
  __v:number;
  session:string;
  iat:number;
  exp:number;
}


const Navbar:React.FC  = () => {
  const router = useRouter()
  const auth:any = useAuth();
  const {loading,error,user,mutate} = useUser();
  if(loading)
    return <div><h3>loading..</h3></div>
if(error)//FIXME
console.log(error)
  // if(error){
  //   // redirect to error page send error
  //   return <><h1>{(!loading && error.message) && error}</h1></>
  // }
  const handleLogout = async () =>{
    const req = await auth.logout()
    if(!req)
      console.error('error during logout')
    mutate(null)
    router.push('/auth/login')
  }
  
  return <>
    <div className="bg-red-500 w-full h-12 flex flex-row justify-end self-center">
      <div className="mr-20  h-full ">
      <button  className=' h-full text-white' onClick={()=>handleLogout()}>Logout</button></div></div>
   </>
};





export const getServerSideProps: any = async (context:any) => {
  
  const accessToken:NextApiRequestCookies = context.req.cookies.accessToken
  const refreshToken:NextApiRequestCookies = context.req.cookies.refreshToken

  if(!accessToken || !refreshToken){
     return {
      redirect: {
      destination: "/auth/login",
      permanent: false,
    },
    props: {},
  }}

  return { props: { fallbackData: {}}
  
}};
export default Navbar;