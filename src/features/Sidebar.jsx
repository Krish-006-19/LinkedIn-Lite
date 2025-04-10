import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";

import '../App.css'

export default function Sidebar() {
  const user = useSelector(state => state.user.user)
  const [postIm, setPostIm] = useState([])
  const [profView, setProfView] = useState([])
  const authinfo = JSON.parse(localStorage.getItem('auth'))||{}
  useEffect(() => {
    setPostIm(prev => [...prev, Math.floor(Math.random() * 200) + 1])
    setProfView(prev => [...prev, Math.floor(Math.random() * 100) + 1])
  }, [])

  return (
    <div className="w-46 flex flex-col side !mt-0 gap-3">
      <div className="rounded-sm bg-white border hover:cursor-pointer overflow-hidden">
        <div className="relative">
          <img
            className="h-16 w-full object-cover"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhAb2U5-1-Qc6yHh6NR2Geq95BPKArkiIJAfWWHLT3bQEDL7RRCkxD1jU51vjs4xiKYM-kNhPEw3fe_Yt6xkZ3ztZziEiasMt4Jm4JtOuQnS2eWmObb0cqGaOVmo8nL2OBQ7eSbTLoLIan6f9zYryHmb-F3VJBVUCkcL__X6VcWBCTUswA1VfBHNl2J=w560-h373"
            alt="cover"
          />

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8">
            <Avatar src={!authinfo.isBool?user.photoURL:authinfo?.photoURL} sx={{ width: 75, height: 75, border: 1 }} />
          </div>
        </div>

        <div className="text-center !mt-12 px-2">
          <p className="text-xl font-bold">{user.displayName}</p>
          <p className="text-xs text-gray-600">{user.email}</p>

          <div className="mt-4 flex justify-between text-sm text-gray-700 px-4">
            <p>Profile viewers</p>
            <span className="text-blue-600 font-medium">
              {profView.length ? Math.max(...profView) : 0}
            </span>
          </div>

          <div className="flex justify-between text-sm text-gray-700 px-4">
            <p>Post impressions</p>
            <span className="text-blue-600 font-medium">
              {postIm.length ? Math.max(...postIm) : 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
