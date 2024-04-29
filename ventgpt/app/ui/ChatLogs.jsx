import React from 'react'

function ChatLogs({title}) {
  return (
    <div className='w-4/5 text-white p-1 rounded-xl hover:bg-[#2f2f2f]'>
        <h3 className=' ml-8 pt-2  text-xl'>{title}</h3>
    </div>
  )
}

export default ChatLogs