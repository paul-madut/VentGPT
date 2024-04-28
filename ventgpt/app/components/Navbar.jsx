import React from 'react'
import Image from 'next/image'
import Dropdown from './Dropdown'
function Navbar() {
  return (
    <div className='w-full h-12'>
        <div className='nav__container w-full h-12bg-transparent border-b-2 border-[#303030]'>
      <Dropdown />

        </div>
    </div>
  )
}

export default Navbar