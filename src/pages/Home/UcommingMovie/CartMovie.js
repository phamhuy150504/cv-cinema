import React, { useState } from 'react'
import "react-multi-carousel/lib/styles.css"
import { AiFillClockCircle, AiFillLike, AiOutlinePlayCircle } from 'react-icons/ai'
import Trailer from '../../../components/trailer/Trailer'


export default function CartMovie({ movie, Trailer, setTrailer }) {
    const { tenPhim, ngayKhoiChieu, hinhAnh, src } = movie

    return (
       <>
            <div className='lg:w-[290px] md:w-[250px] sm:w-[300px] w-[350px] sm:mx-0 mx-auto shadow-2xl group/item'>
                <div className="mb-5 space-y-6">
                    <div>
                        <img className="w-full h-[450px] rounded-t bg-cover bg-center relative" src={hinhAnh} alt="hinhAnh" />
                        <div className='absolute w-full h-[450px] top-0 left-0 bg-black bg-opacity-40 invisible  group-hover/item:visible duration-200'>
                            <div className='flex justify-center items-center h-full'>
                                <button className=' rounded-full text-7xl hover:text-[#E4D807] duration-200'>
                                    <AiOutlinePlayCircle />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex justify-between'>
                            <h5 className="hover:text-[#E4D807] font-semibold duration-200">
                                {tenPhim.substring(0, 12)}
                            </h5>
                            <span className="text-[#E4D807]">{ngayKhoiChieu.substring(0, 12)}</span>
                        </div>
                        <ul className='flex justify-between text-xs '>
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
