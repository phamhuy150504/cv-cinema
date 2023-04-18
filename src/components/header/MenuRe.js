import React, { useEffect, useRef } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export default function MenuRe({ setMenu }) {
  const ele_menu = useRef()

  useEffect(() => {
    const handleCloseMenu = (event) => !ele_menu.current.contains(event.target) && setMenu(false)
    document.addEventListener('mousedown', handleCloseMenu)

    return () => {
      document.removeEventListener('mousedown', handleCloseMenu)
    }
  }, [])
  

  return (
    <div  className='w-screen h-screen bg-[rgba(23,26,33,.95)] z-50 fixed ' >
      <div ref={ele_menu} className='w-[280px] h-full ml-auto bg-[#171D23]'>
        <div className='h-full w-full flex flex-col'>
        
          <div className='flex border-b-2 border-gray-500 '>
            <a className='p-[30px]' href="https://themehut.co/wp/movflx/">
              <img className='w-[150px]' src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png" alt="Logo" />
            </a>
            <button onClick={() => setMenu(false)} className='text-[#E4D807] text-3xl'><IoMdCloseCircle /></button>
          </div>

          <ul className='flex flex-col space-y-3 text-base font-bold text-white pt-2'>
            <li className='border-b-2 border-gray-500 pb-3 hover:text-[#E4D807] duration-200'>
              <a className='px-8' href="#">HOME</a>
            </li>
            <li className='border-b-2 border-gray-500 pb-3 hover:text-[#E4D807] duration-200'>
              <a className='px-8' href="#">Movie</a>
            </li>
            <li className='border-b-2 border-gray-500 pb-3 hover:text-[#E4D807] duration-200'>
              <a className='px-8' href="#">TVSHOW</a>
            </li>
            <li className='border-b-2 border-gray-500 pb-3 hover:text-[#E4D807] duration-200'>
              <a className='px-8' href="#">BLOG</a>
            </li>
          </ul>

          <div className='flex justify-center pt-8 space-x-8 text-3xl text-white'>
            <NavLink to={'https://www.facebook.com/profile.php?id=100027089947646'}> 
              <button className='hover:text-[#E4D807] duration-200'>
                <FaFacebook />
              </button>
            </NavLink>
            <NavLink to={'https://www.instagram.com/direct/t/340282366841710300949128272811240572764'}>
              <button className='hover:text-[#E4D807] duration-200'>
                <BsInstagram/>
              </button>
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}
