import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky w-full bg-black h-[50px] text-white flex items-center justify-end p-10 text-sm md:text-lg lg:text-xl gap-5 lg:gap-10'>
      {/* Link to Home Page */}
      <Link to={"/"} className=' text-white font-semibold'>Home</Link>

      {/* Link to Contacts List */}
      <Link to={"/contacts"} className=' text-white font-semibold'>Contacts List</Link>

      {/* Link to Dashboard */}
      <Link to={"/charts-and-maps"} className=' text-white font-semibold '>Charts and Maps</Link>

      {/* Link to Code */}
      <Link to={"https://github.com/CodeZera11/taiyo_ai_assignment"} className=' text-white font-semibold '>Code</Link>
    </div>
  )
}

export default Navbar