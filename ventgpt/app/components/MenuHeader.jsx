import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function MenuHeader() {
  return (
    <div className='p-4 w-full flex justify-between'>
      <div className='flex'>

      <Image src="/white-logo.png" width={50} height={50} alt="logo"/> 
      <h2 className='text-white ml-2 pt-2 font-semibold text-2xl'> VentGPT</h2>
      </div>
      <button><FontAwesomeIcon icon={faPenToSquare} className='text-white text-2xl '></FontAwesomeIcon></button>
      </div>

  )
}

export default MenuHeader