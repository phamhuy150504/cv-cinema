import React, { useState } from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import Trailer from '../../../components/trailer/Trailer'

export default function Online() {
    const [trailer, setTrailer] = useState(true)

    // handle
    const handleShowTrailer = () => setTrailer(false)

    // ----------------------------------------------------------------  
    return (
        <section className="live-area live-bg fix" data-background="https://themehut.co/wp/movflx/wp-content/uploads/2022/08/live_bg.jpg" style={{ backgroundImage: 'url("https://themehut.co/wp/movflx/wp-content/uploads/2022/08/live_bg.jpg")' }}>
            <div className="container py-12">
                <div className="md:flex md:items-center md:space-y-0 space-y-5">

                    <div className="md:w-1/2 space-y-5 pr-7">

                        <div className="section-title title-style-two mb-25">
                            <span className="text-sm text-[#E4D807] font-bold">Online Streaming</span>
                            <h2 className="md:text-4xl text-3xl font-bold text-black">Live Movie &amp; TV Shows For Friends &amp; Family</h2>
                        </div>

                        <div className="text-sm md:space-y-5 space-y-2 flex flex-col justify-center">

                            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>

                            <div className="flex items-center space-x-5">
                                <div className="text-4xl font-bold text-red">
                                    <h2 className='text-red-500 underline'>HD 4K</h2>
                                </div>
                                <div className="active-customer">
                                    <h4 className='md:text-4xl text-3xl font-bold '>20K+</h4>
                                    <p className='text-xl font-semibold'>Active Customer</p>
                                </div>
                            </div>

                            <div href="https://www.youtube.com/watch?v=R2gbPxeNk2E" >
                                <button onClick={handleShowTrailer} className='bg-[#E4D807] font-semibold flex items-center space-x-3 rounded-full px-6 py-3 border-2 border-[#E4D807] hover:bg-white duration-200'>
                                    <p><BsFillPlayCircleFill /></p>
                                    <p>Watch Now</p>
                                </button>
                            </div>

                        </div>

                    </div>

                    <div className="md:w-1/2">
                        <div  >
                            <img src="../img/live_img.png" alt="family" />
                        </div>
                    </div>

                </div>
            </div>

            <Trailer src={'https://www.youtube.com/embed/R2gbPxeNk2E'} trailer={trailer} setTrailer={setTrailer} />
        </section>

    )
}
