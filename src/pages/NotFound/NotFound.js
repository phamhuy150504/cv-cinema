import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className='h-screen w-full bg-cover bg-center' style={{ backgroundImage: 'url("../img/notFound_bg.jpg")' }}>
            <div className='w-full h-full bg-black bg-opacity-70 flex items-center justify-center'>
               <NavLink to={'/'}>
                    <button className='px-10 py-1 border-2 border-[#E4D807] bg-[#E4D807] rounded-sm font-semibold hover:text-white hover:bg-opacity-0 duration-300'>
                            Go Home
                    </button>
               </NavLink>
            </div>
        </section>
    )
}
