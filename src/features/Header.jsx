import icon from "./images/icon.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { Avatar } from "@mui/material";
import '../App.css'

export default function Header() {
  const user = useSelector(state=>state.user.user)
  const authinfo = JSON.parse(localStorage.getItem('auth'))
  const dispatch = useDispatch()
  const logoutApp =async()=> {
    dispatch(logout())
    await signOut(auth)
  }
  return (
    <div className="bg-white z-10 fixed top-0 w-full border-b">
    <div className="flex flex-wrap justify-between items-center px-4 md:px-16 py-3">
      
      {/* Left Side */}
      <div className="flex items-center search gap-2">
        <img className="h-[40px] rounded-sm" src={icon} alt="Logo" />
        <div className="hidden sm:flex items-center bg-[#f2f2f2] px-2 md:px-4 py-1 md:py-2 rounded-sm">
          <SearchIcon className="text-gray-500" />
          <input
            className="bg-transparent outline-none pl-2 w-28 md:w-56 font-bold"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
  
      {/* Right Side */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-10 flex-wrap justify-center !mt-2 sm:!mt-0">
  
        {[
          { icon: <HomeIcon fontSize="medium" />, label: "Home" },
          { icon: <GroupIcon fontSize="medium" />, label: "Network" },
          { icon: <BusinessCenterIcon fontSize="medium" />, label: "Jobs" },
          { icon: <MessageIcon fontSize="medium" />, label: "Messages" },
          { icon: <NotificationsIcon fontSize="medium" />, label: "Notifications" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-black">
            {item.icon}
            <b className="text-xs sm:text-sm !mt-1">{item.label}</b>
          </div>
        ))}
  
        <div className="flex flex-col items-center cursor-pointer" onClick={logoutApp}>
          <Avatar src={!authinfo.isBool?user.photoURL:authinfo?.photoURL} className="border-2 border-gray-300" sx={{height:40,width:40}} />
          <b className="text-xs sm:text-sm text-gray-600">Logout</b>
        </div>
      </div>
    </div>
  </div>
  
  );
}
