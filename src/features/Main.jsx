import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import '../App.css'
import Widgets from './Widgets'
function Main() {
  return (
    <div>
    <Header />
    
    <div className="flex flex-col md:flex-row justify-center gap-4 !mt-24 px-2">
      <div>
      <Sidebar />

      </div>
      <div>
      <Feed />

      </div>
      <div>
      <Widgets />

      </div>
    </div>
  </div>
  
  )
}

export default Main