import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
function Textbar() {
  return (
    <div >
        <input className='textbar h-12 w-2/3 border-2 border-[#303030] bg-transparent rounded-2xl left-1/4 bottom-4 fixed text-center text-white ' type="text" placeholder='How are you feeling today?' >

        </input>
        <FontAwesomeIcon icon={faArrowUp} className="text-[#212121] rounded-md bg-white text-xl border-2 border-white p-1 fixed right-64 bottom-6 hover:border-black " />

    </div>
  )
}

export default Textbar