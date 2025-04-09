import React, { useEffect, useRef, useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from '../Firebase';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move'
import '../App.css'

export default function Feed() {
  const [ input, setInput ] = useState('')
  const [ posts, setPosts ] = useState([])
  const user = useSelector(state=>state.user.user)
  const authinfo = JSON.parse(localStorage.getItem('auth'))
    useEffect(() => {
    let Queryli = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))

      const unsub = onSnapshot(Queryli, (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      })
      return () => unsub()
  },[])

  const sendPost = async (e) => {
    if(e.key === 'Enter'){
      e.preventDefault()
  
      if(input.trim() === "") return
  
      await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoURL||'',
        timestamp: serverTimestamp(),
      })
  
      setInput("")
    }
  }

  const fileInputRef = useRef(null)

  const handleIconClick = () => {
    fileInputRef.current.click()
  };

  return (
    <div className="w-[550px] feed">
      <div>
      <div className="bg-white p-4 rounded-sm border-1">
        <div className="flex justify-evenly items-center">
          <div>
            <Avatar src={!authinfo.isBool?user.photoURL:authinfo?.photoUrl} sx={{ width: 55, height: 55, border:1 }} />
          </div>
          <div>
            <form>
              <input
                placeholder="Start a post"
                value={input}
                onChange={e=>setInput(e.target.value)}
                onKeyDown={sendPost}
                className="h-10 w-90 !p-5 font-bold outline-0 border-gray-700 rounded-full items-center pl-5"
              />
            </form>
          </div>
        </div>
        <div className="!mt-3 flex items-center">
        <div 
  onClick={handleIconClick} 
  className="cursor-pointer flex items-center space-x-2 p-2 rounded-lg "
>
  <PermMediaIcon  />
  <p className="font-bold !ml-2">Media</p>
</div>

          <div className="cursor-pointer inline-block !ml-10">
            <CalendarMonthIcon />
            <p className="inline-block !ml-2 font-bold">Events</p>
          </div>
          <div className="cursor-pointer !ml-10">
            <ArticleIcon />
            <p className="inline-block !ml-2 font-bold">Write Article</p>
          </div>
        </div>
      </div>
      <div className="border-1 !mt-4"></div>
<FlipMove>
{posts?.map(({id, data:{name, description, message, photoUrl}})=>(
      <Post 
      key={id}
      name={name}
      description={description}
      message={message}
      photoUrl={photoUrl?photoUrl:authinfo?.photoURL}/>
    ))}
</FlipMove>
    </div> 
    </div>
  )
}
