import React, { useEffect, useRef } from 'react'
import { GrClose } from 'react-icons/gr'

export default function Trailer({ src, trailer, setTrailer }) {
    const ele_trailer = useRef()
    const ele_video = useRef()
    
    useEffect(() => {
        const handlerShowTrailer = () => setTrailer(true)
        ele_trailer.current.addEventListener('click', handlerShowTrailer)

        const handleCloseOutside = (event) => !ele_video.current.contains(event.target) && setTrailer(true)
        document.addEventListener('mousedown', handleCloseOutside)

        // ------------------
        return () => {
            document.removeEventListener('mousedown', handleCloseOutside)
        }
    },[])

    // ------------------------------------------------------------
    return (
        <div className={trailer ? ' hidden' : 'bg-[rgba(23,26,33,.95)] z-50 fixed h-screen w-screen top-0 left-0'}>
            <div className="flex items-center justify-center h-full ">
                <div ref={ele_video} className='relative'>
                    <p ref={ele_trailer} className='absolute -top-7 -right-2 text-2xl font-bold text-white cursor-pointer'>
                        <GrClose />
                    </p>
                    <iframe className='lg:w-[850px] lg:h-[450px] md:w-[600px] md:h-[350px] sm:w-[550px] sm:h-[300px] w-[440px] h-[280px]' src={src}  title="Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
            </div>
        </div>
    )
}
