import { auth, provider } from '../Firebase'
import img from './images/linkedInLog.png' 
import {useState} from 'react'
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/userSlice'
import { useNavigate } from 'react-router-dom'
function Register() {
  const navigate = useNavigate()
    const [name, setName] = useState('')
    const [bool, setBool] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilepic, setProfilepic] = useState('')
    const dispatch = useDispatch()
    const register = async(e)=>{
      e.preventDefault()
      try{
        setBool(false)
        if(name.trim() === ''){
          alert('Please enter full name!')
          return;
        }
    
        const {user} =  await createUserWithEmailAndPassword(auth,email,password)
    
        await updateProfile(user,{
            displayName:name,
            photoURL:profilepic
        })
        
        dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL
        }))
    
      } catch (coc){
        console.error(coc)
        alert("Something went wrong")
      }
      navigate('/MyLinkedin/')
    }

    const google = async()=>{
      try{
        setBool(true)
      const {user} = await signInWithPopup(auth,provider)
      const authinfo={
        uid:user.uid,
        email:user.email,
        photoURL:user.photoURL,
        displayName:user.displayName,
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
    <div>
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <form>
            <div className='flex justify-center items-center'>
              <div className='bg-blue-50 border rounded-2xl p-6 shadow-lg'>
                <div className='flex justify-center'>
                  <img src={img} className="rounded-t-2xl h-40 border-b mb-4" />
                </div>
        
                <div className='grid gap-3'>
                  <input type="text" onChange={e=>setName(e.target.value)} value={name} className='pl-4 font-bold text-xl outline-none p-2' placeholder='Full Name (only for new users)' required/>
                  <input type="url" onChange={e=>setProfilepic(e.target.value)} value={profilepic} className='pl-4 font-bold text-xl outline-none p-2' placeholder='Image Address (optional)' />
                  <input type="email" onChange={e=>setEmail(e.target.value)} value={email} className='pl-4 font-bold text-xl outline-none p-2' placeholder='Email' required/>
                  <input type="password" onChange={e=>setPassword(e.target.value)} value={password} className='pl-4 font-bold text-xl outline-none p-2' placeholder='Password' required/>
                </div>
        
                <div className='flex flex-col items-center mt-4'>
                  <button type='submit' onClick={register} className='w-full rounded-2xl p-3 bg-blue-800 text-white mb-3 hover:cursor-pointer'><b>Register Now</b></button>
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
    </div>
    
  )
}

export default Register
