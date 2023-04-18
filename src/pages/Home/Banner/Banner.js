import React, { useState } from 'react'
import { BsFillCalendar2CheckFill } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'
import { AiFillPlayCircle } from 'react-icons/ai'
import Trailer from '../../../components/trailer/Trailer'


export default function Banner() {
    const [trailer, setTrailer] = useState(true)



// handle events 

// ----------------------------------------------------------------
    return (
        <section className='h-screen w-full bg-cover bg-center' style={{ backgroundImage: 'url("https://themehut.co/wp/movflx/wp-content/uploads/2022/08/banner_bg01.jpg")' }}>
            <div className='container mx-auto pt-56'>
                <div className='flex items-center h-full px-4'>
                    <div className='text-white font-bold sm:w-1/2 w-ful lg:space-y-5'>
                        <h2 className='text-2xl lg:text-2xl text-[#E4D807]'>Movflx</h2>
                        <h1 className='text-4xl lg:text-6xl'>
                            Unlimited
                            <span className='text-[#E4D807]'>Movie</span>
                            , TVs Shows, & More.
                        </h1>

                        <ul className='flex items-center text-sm font-semibold space-x-3 md:space-x-7 pt-7 pb-5'>
                            <li className='flex space-x-1 lg:space-x-3'>
                                <p className='bg-white text-black lg:py-1 md:px-1 lg:px-2 text-[10px] lg:text-xs'>PG 18</p>
                                <p className='md:px-2 border-2 border-white'>HD</p>
                            </li>
                            <li>
                                <p className='md:text-xs text-xs lg:text-base'>Action, Comedy    </p>
                            </li>
                            <li className='flex space-x-3'>
                                <p className='flex space-x-2 md:text-base '><span className='text-[#E4D807]'><BsFillCalendar2CheckFill /> </span><span>2021</span></p>

                                <p className='flex space-x-2 md:text-base'><span className='text-[#E4D807]'><AiFillClockCircle /></span> <span>120'</span></p>
                            </li>
                        </ul>

                        <button 
                        onClick={() => setTrailer(false)}
                        className='py-3 px-7 border-2 border-[#E4D807] bg-[#12151e] hover:text-[#12151e] hover:bg-[#E4D807] duration-200 rounded-3xl flex items-center space-x-2 '>
                            <p> <AiFillPlayCircle /></p> <span>Watch now</span>
                        </button>
                        
                    </div>
                </div>
            </div>
            
            <Trailer src={'https://www.youtube.com/embed/X0tOpBuYasI'} trailer={trailer} setTrailer={setTrailer} />
        </section>
    )
}
