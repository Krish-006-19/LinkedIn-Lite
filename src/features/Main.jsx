import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
function Main() {
  return (
        <div>
        <Header/>
        <div className='flex justify-center'>
      <Sidebar/>
        <div className='!mt-24 !ml-4'>
        <Feed/>
        </div>
        <div className='!ml-4'>
        <Widgets/>
        </div>
      </div>
      </div>
  )
}

export default Main