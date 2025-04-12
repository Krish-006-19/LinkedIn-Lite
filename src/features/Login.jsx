import { auth, provider } from '../Firebase'
import img from './images/linkedInLog.png' 
import {useState} from 'react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/userSlice'
import { Link, useNavigate } from 'react-router-dom'
const Login=()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bool, setBool] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginToApp=async(e)=>{
      e.preventDefault()
        try{    
          setBool(false)
          const {user} = await signInWithEmailAndPassword(auth, email, password)
          if(email && password)
          dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
        }))
        } catch(co){
          throw co          
        } 
        navigate('/MyLinkedin/')
      }
const google = async()=>{
        try{
        setBool(true)
        const {user} = await signInWithPopup(auth,provider)
        const authinfo={
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
          isBool: bool
        }
        localStorage.setItem('auth',JSON.stringify(authinfo))
        dispatch(login(authinfo))
          } catch (err) {
            throw err
          }
          navigate('/MyLinkedin/')
      }
  return (
<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
  <form>
    <div className='flex justify-center items-center'>
      <div className='bg-blue-50 border rounded-2xl p-6 shadow-lg'>
        <div className='flex justify-center'>
          <img src={img} className="rounded-t-2xl h-40 border-b mb-4" />
        </div>

        <div className='grid gap-3'>
          <input type="email" onChange={e=>setEmail(e.target.value)} value={email} className='pl-4 font-bold text-xl outline-none p-2' placeholder='Email' required/>
          <input type="password" onChange={e=>setPassword(e.target.value)} value={password} className='pl-4 font-bold text-xl outline-none p-2' placeholder='Password' required/>
        </div>

        <div className='flex flex-col items-center mt-4'>
          <button type='submit' onClick={loginToApp}
             className='w-full rounded-2xl p-3 bg-blue-800 text-white mb-3 hover:cursor-pointer'><b>Sign In</b></button>
          <div>
            <b>Not Registered? <Link to='/Mylinkedin/register'><span
             className='text-blue-600 hover:cursor-pointer'>Register Now</span></Link></b>
             
          </div>
        </div>
      </div>
    </div>
  </form>
  <div className='!mt-4 flex justify-center'>
    <button 
     onClick={google}
     className='border p-2 flex align-middle rounded-sm text-sm bg-gray-100 hover:cursor-pointer'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" className='w-3 !mt-1 !mr-2 h-3'/>
    <b>Continue with google</b></button>
             </div>
</div>
  )
}

export default Login