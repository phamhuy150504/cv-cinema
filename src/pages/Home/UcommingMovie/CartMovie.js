import React from 'react'
import "react-multi-carousel/lib/styles.css"
import { AiFillClockCircle, AiFillLike, AiFillPlayCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { getSrc } from '../../../toolkits/reducers/movieSlice'


export default function CartMovie({ movie, setTrailer }) {
    const { tenPhim, ngayKhoiChieu, hinhAnh, trailer } = movie
    const dispatch = useDispatch()

    const handleShowTrailer = () => {
        dispatch(getSrc(trailer))
        setTrailer(false)
    }

// ----------------------------------------------------------------
    return (
       <>
            <div className='shadow-2xl  text-center w-full mx-auto col-span-1 relative group/item'>
                <div className="mb-5 space-y-6">

                    <div>
                        <img className="lg:h-[430px] lg:w-[300px] md:h-[410px] md:w-[290px] w-full rounded-t-sm bg-cover bg-center  " src={hinhAnh} alt="img" />
                        <div 
                        className='absolute  w-full h-0 bottom-0 group-hover/item:h-full duration-300 left-0 bg-black bg-opacity-40 invisible group-hover/item:visible'>
                            <div className='flex justify-center items-center h-full'>
                                <button onClick={handleShowTrailer} className=' rounded-full text-7xl text-yellow-500 hover:text-yellow-400 duration-200'>
                                    <AiFillPlayCircle />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='space-y-3 w-full'>

                        <div className='flex justify-between'>
                            <h5 className="hover:text-[#E4D807] font-semibold duration-200 cursor-pointer text-white">
                                {tenPhim.substring(0, 12)}
                            </h5>
                            <span className="text-[#E4D807]">{ngayKhoiChieu.substring(0, 12)}</span>
                        </div>

                        <ul className='flex justify-between text-xs text-white'>
                            <li>
                                <span className="text-[#E4D807] font-semibold border-gray-500 border-2 px-2">HD</span>
                            </li>
                            <li className='flex space-x-2'>
                                <p className="flex items-center space-x-1">
                                    <span className='text-[#E4D807]'><AiFillClockCircle /></span>
                                    <span>90 min</span>
                                </p>
                                <p className="flex items-center space-x-1">
                                    <span className='text-[#E4D807]'><AiFillLike /></span>
                                    <span>5.0</span>
                                </p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
       </>
    )
}
