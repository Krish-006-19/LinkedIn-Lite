import { Avatar } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { forwardRef } from "react";
 const Post=forwardRef(({ name , description , message , photoUrl },ref)=> {
  const authinfo = JSON.parse(localStorage.getItem('auth'))
  return (<>
    {<div ref={ref} className="!mt-3 bg-white rounded-sm border-1 p-4">
        <div className="flex items-center">
          <div className="!mr-2">
          <Avatar src={photoUrl?photoUrl:authinfo?.photoUrl} sx={{ width: 55, height: 55,border:1 }} /> 
    </div>
            <div>
              <h2 className="!mb-0 text-xl"><b>{name}</b></h2>
              <p className="text-gray-400 font-medium text-xs !mt-0">{description}</p>
            </div>
        </div>
        <div>
          <p>{message}</p>
        </div>
        <div className="flex justify-evenly items-center !mt-2">
         <div className="hover: cursor-pointer">
            <ThumbUpOffAltIcon/>
            <b className="align-middle !ml-2">Like</b>
         </div>
          <div className="hover: cursor-pointer">
            <AddCommentIcon/>
            <b className="align-middle !ml-2">Comment</b>
          </div>
          <div className="hover: cursor-pointer">
            <AutorenewIcon/>
            <b className="align-middle !ml-2">Repost</b>
          </div>
          <div className="hover: cursor-pointer">
            <SendIcon/>
            <b className="align-middle !ml-2">Send</b>
          </div>
        </div>
    </div>
    }</>
  )
})

export default Post