import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import Search from './Search';

export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const [search, setSearch] = useState(false)

    // handle events
    const changeSearch = () => search ? setSearch(false) : setSearch(true)

    const changeNavbar = () => window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
    window.addEventListener('scroll', changeNavbar)


// ----------------------------------------------------------------
    return (
        <>

            <header className={navbar ? 'bg-[#171d22] pb-4 pt-2 duration-300 text-white z-50 w-full h-20 fixed ' : 'p-2 text-white absolute w-full top-0 left-0'}>
                <div className="container flex justify-between items-center h-16 mx-auto">
                    <a href="#" className="flex items-center p-2">
                        <img className='w-[154px]' src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png" alt="logo" />
                    </a>
                    
                    <ul className="items-stretch hidden space-x-12 lg:flex">
                        <li className="flex hover:text-[#E4D807] duration-300 ">
                            <a href="#" className="flex items-center text-sm font-bold">HOME</a>
                        </li>
                        <li className="flex hover:text-[#E4D807] duration-300 ">
                            <a href="#" className="flex items-center text-sm font-bold">MOVIE</a>
                        </li>
                        <li className="flex hover:text-[#E4D807] duration-300 ">
                            <a href="#" className="flex items-center text-sm font-bold">TVSHOW</a>
                        </li>
                        <li className="flex hover:text-[#E4D807] duration-300 ">
                            <a href="#" className="flex items-center text-sm font-bold">BLOG</a>
                        </li>
                    </ul>

                    <div className="items-center flex-shrink-0 flex space-x-5">
                        <button
                            onClick={changeSearch}
                            className='text-2xl hover:text-[#E4D807] duration-200 font-bold'>
                            <BiSearchAlt2 />
                        </button>
                        <button className="hidden lg:block self-center px-8 py-2 rounded-3xl border-[#E4D807] border-2 hover:bg-[#E4D807] hover:text-black font-bold duration-300">Sign in</button>
                        <button className='lg:hidden block text-3xl font-bold hover:text-[#E4D807] duration-300'>
                            <AiOutlineMenu />
                        </button>
                    </div>

                </div>
            </header>

          {search && <Search search={search} setSearch={setSearch} changeSearch={changeSearch} />}

        </>
    )
}
