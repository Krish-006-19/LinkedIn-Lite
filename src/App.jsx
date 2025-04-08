import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './Firebase'
import Login from './features/Login'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { login, logout } from './Redux/userSlice'
import Main from './features/Main'
export default function App() {
  const user = useSelector(state=>state.user.user)
  const dispatch = useDispatch()
  useEffect(()=>{
     onAuthStateChanged(auth,(userAuth)=>{
       if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL
       }))
      } else {
        dispatch(logout())
      }
    })
  },[])

  return (
    <div>
      {user?<Main/>:<Login />}
    </div>
  )
}