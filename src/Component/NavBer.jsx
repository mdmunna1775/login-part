import React from 'react'
import { NavLink } from 'react-router'
import Navbarlogo from '../assets/hans-bmw-4753868.jpg'

function NavBer() {
  return (
    <>
        <nav className='w-full h-full py-3.5 text-center bg-black text-white'>
            <div className='container mx-auto'>
              <div className='flex justify-between items-center mt-10 text-2xl'>
                  <img className=' rounded-2xl h-20 w-30' src={Navbarlogo} alt="" />
                  <div className=' '>
                    <ul className=' flex gap-10 text-center cursor-pointer '>
                      <li className='hover:border-b-4 py-2 px-5 rounded-2xl duration-100'><NavLink to= "/" href="#">Home</NavLink></li>
                      <li className='hover:border-b-4 py-2 px-5 rounded-2xl duration-100'><NavLink to="/About" href="#">About</NavLink></li>
                      <li className='hover:border-b-4 py-2 px-5 rounded-2xl duration-100'><NavLink to="/Services" href="#">Services</NavLink></li>
                      <li className='hover:border-b-4 py-2 px-5 rounded-2xl duration-100'><a href="#">blog</a></li>
                      <li className='hover:border-b-4 py-2 px-5 rounded-2xl duration-100'><a href="#">contact</a></li>
                  </ul>
                  </div>                  
                    <div>
                      <button className=' py-4 px-5 bg-blue-600 rounded-3xl transform-border text-white text-xl font-bold hover:bg-purple-500 duration-300 cursor-pointer'>Order Now</button>
                    </div>
              </div>
            </div>
        </nav>
    </>
  )
}

export default NavBer
