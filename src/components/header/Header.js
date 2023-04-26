import React, { useState } from 'react'
import { BiSearchAlt2, BiLogIn } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import Search from './Search';
import MenuRe from './MenuRe';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { localService } from '../../services/localService';

export default function Header({resultRef}) {
    const [navbar, setNavbar] = useState(false)
    const [search, setSearch] = useState(false)
    const [menu, setMenu] = useState(false)
    const { account } = useSelector(state => state.userSlice)
   
    // handle events
    const changeSearch = () => search ? setSearch(false) : setSearch(true)

    const changeMenu = () => menu ? setMenu(false) : setMenu(true)

    const changeNavbar = () => window.scrollY >= 180 ? setNavbar(true) : setNavbar(false)
    window.addEventListener('scroll', changeNavbar)

    const handleLogout = () => {
        localService.remove()
        window.location.reload()
    }


    // ----------------------------------------------------------------
    return (
        <>
            <header className={navbar ? 'bg-[#171d22] pb-4 pt-2 duration-300 text-white z-4020364 w-full h-20 fixed ' : 'p-2 text-white absolute w-full top-0 left-0'}>
                <div className="container flex justify-between items-center h-16 mx-auto">

                    <NavLink to={'/'} className="flex items-center p-2">
                        <img className='w-[154px]' src="../img/logo.png" alt="logo" />
                    </NavLink>

                    <ul className="items-stretch hidden space-x-12 lg:flex">
                        <li className="flex hover:text-[#E4D807] duration-300">
                            <NavLink to={'/'} className="flex items-center text-sm font-bold">HOME</NavLink>
                        </li>
                        <li className="flex hover:text-[#E4D807] duration-300 ">
                            <a onClick={()=>{
                                resultRef.current.scrollIntoView({behavior:"smooth"})
                            }} className="flex items-center text-sm font-bold">UPCOMING</a>
                        </li>
                        <li className="flex hover:text-[#E4D807] duration-300 ">
                            <a href="#" className="flex items-center text-sm font-bold">THEATER</a>
                        </li>
                        <li className="flex hover:text-[#E4D807] duration-300 ">
                            <a href="#" className="flex items-center text-sm font-bold">HISTORY</a>
                        </li>
                    </ul> 

                    <div className="items-center flex-shrink-0 flex space-x-5">
                        <button
                            onClick={changeSearch}
                            className='text-2xl hover:text-[#E4D807] duration-200 font-bold'>
                            <BiSearchAlt2 />
                        </button>

                        {account ?
                            <button onClick={handleLogout} className='hidden lg:block self-center px-3 py-2 rounded-3xl border-[#E4D807] border-2 hover:bg-[#E4D807] hover:text-black font-bold duration-300'>
                                <NavLink className='flex items-center space-x-3'>
                                    <p className='text-2xl'><BiLogIn /></p>
                                    <p className='text-sm'> Đăng Xuất</p>
                                </NavLink>
                            </button>
                            :
                            <button>
                                <NavLink to={'/login'} className="hidden lg:block self-center px-8 py-2 rounded-3xl border-[#E4D807] border-2 hover:bg-[#E4D807] hover:text-black font-bold duration-300">
                                    Sign in
                                </NavLink>
                            </button>
                        }

                        <button
                            onClick={changeMenu}
                            className='lg:hidden block text-3xl font-bold hover:text-[#E4D807] duration-300'>
                            <AiOutlineMenu />
                        </button>
                    </div>

                </div>
            </header>

            {search && <Search search={search} setSearch={setSearch} changeSearch={changeSearch} />}
            {menu && <MenuRe menu={menu} setMenu={setMenu} />}
        </>
    )
}
