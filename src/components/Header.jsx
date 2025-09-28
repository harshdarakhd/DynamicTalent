import React from 'react'
import logo from '../assets/CA_logo.png'

const Header = () => {


  return (
    <div className='flex justify-left items-center mt-10 space-x-4 w-full mx-auto'>
      <img src={logo} className="ml-4 w-[80px] h-[60px] md:w-[60px] md:h-[40px] sm:w-[30px] sm:h-[25px] mb-12" alt="logo" />
      <div>
        <h1 className='font-normal font-serif text-4xl md:2xl sm:xl hover:text-blue-500'>&nbsp;ADAL</h1>
        <h1 className='font-thin font-serif text-4xl md:xl sm:lg ml-2 hover:text-blue-500 mb-14'>ASSOCIATES</h1>
      </div>
    </div>
  )
}

export default Header