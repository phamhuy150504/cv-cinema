import React, { useEffect, useRef } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { localService } from '../../services/localService'

export default function MenuRe({ setMenu }) {
  const { account } = useSelector(state => state.userSlice)
  const ele_menu = useRef()
  
  useEffect(() => {
    const handleCloseMenu = (event) => !ele_menu.current.contains(event.target) && setMenu(false)
    document.addEventListener('mousedown', handleCloseMenu)

    return () => {
      document.removeEventListener('mousedown', handleCloseMenu)
    }
  }, [])

  // handle
  const handleLogout = () => {
    localService.remove()
    window.location.reload()
  }

  const handleChangPage = () => setMenu(false)

  // ----------------------------------------------------------------
  return (
    <div className='w-screen h-screen bg-[rgba(23,26,33,.95)] z-50 fixed ' >
      <div ref={ele_menu} className='w-[280px] h-full ml-auto bg-[#171D23]'>
        <div className='h-full w-full flex flex-col'>

          <div className='flex border-b-2 border-gray-500 '>
            <NavLink onClick={handleChangPage} className='p-[30px]' to={'/'} >
              <img className='w-[150px]' src="../img/logo.png" alt="Logo" />
            </NavLink>
            <button onClick={() => setMenu(false)} className='text-[#E4D807] text-3xl'><IoMdCloseCircle /></button>
          </div>
          <ul className='flex flex-col space-y-3 text-base font-bold text-white pt-2'>
            <li  className='border-b-2 border-gray-500 pb-3 hover:text-[#E4D807] duration-200'>
              <NavLink onClick={handleChangPage} to={'/'} className='px-8' href="#">HOME</NavLink>
            </li>
            <li className='border-b-2 border-gray-500 pb-3 hover:text-[#E4D807] duration-200'>
              <a className='px-8' href="#">UPCOMING</a>
            </li>
            <li className='border-b-2 border-gray-500 pb-3 hover:text-[#E4D807] duration-200'>
              <a className='px-8' href="#">THEATER</a>
            </li>
            <li className='border-b-2 border-gray-500 pb-3 hover:text-[#E4D807] duration-200'>
              <a className='px-8' href="#">HISTORY</a>
            </li>

            {account &&
              <li onClick={handleLogout}>
                <button className='border-b-2 border-gray-500 pb-3 hover:text-[#E4D807] duration-200 w-full pl-6'>
                  <NavLink className='flex items-center space-x-3'>
                    <p className='text-3xl'><BiLogIn /></p>
                    <p className='text-base'> Đăng Xuất</p>
                  </NavLink>
                </button>
              </li>}

          </ul>

          <div className='flex justify-center pt-8 space-x-8 text-3xl text-white'>
            <a href='https://www.facebook.com/profile.php?id=100027089947646'>
              <button className='hover:text-[#E4D807] duration-200'>
                <FaFacebook />
              </button>
            </a>
            <a href='https://github.com/phamhuy150504'>
              <button className='hover:text-[#E4D807] duration-200'>
                <BsGithub />
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
