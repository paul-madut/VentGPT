import React from 'react'
import MenuHeader from './MenuHeader'
import ChatLogs from '../ui/ChatLogs'
function Menu() {
  return (
    <div className="w-full h-full bg-[#191919]">
        <MenuHeader />
        <h3 className='text-[#a8a8a8] ml-8 pt-2 font-semibold text-xl'> Today</h3>
        <ChatLogs title="Day 1"/>
      
    </div>
  )
}

export default Menu






