import React from 'react'

function FromUser({message}) {
  return (
    <div className='w-full flex justify-end border-orange-500 border-2'>
    <div className='w-auto border-2 border-white m-4'>
       <p className='p-2'>{message}</p>
    </div>
    </div>
  )
}

export default FromUser