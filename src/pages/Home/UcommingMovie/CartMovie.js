import React from 'react'
import "react-multi-carousel/lib/styles.css"
import { AiFillClockCircle, AiFillLike } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'


export default function CartMovie({ movie }) {
    const { tenPhim, ngayKhoiChieu, hinhAnh, maPhim } = movie

    // ----------------------------------------------------------------
    return (
        <NavLink to={`/detail/${maPhim}`}>
            <div className='shadow-2xl text-center sm:w-full w-[270px]  mx-auto cursor-pointer flex justify-center rounded-lg'>
                <div className="mb-5 ">

                    <div className='overflow-hidden rounded-t-lg'>
                        <img className="lg:h-[410px] lg:w-[300px] md:h-[390px] md:w-[290px] sm:h-[450px] h-[400px] sm:w-full w-[270px] rounded-t-lg bg-cover bg-center hover:scale-125 duration-300 ease-in-out" src={hinhAnh} alt="img" />
                    </div>

                    <div className='space-y-3 w-full px-3 pt-3 '>

                        <div className='flex justify-between '>
                            <h5 className="hover:text-[#E4D807] font-semibold duration-200 cursor-pointer text-white">
                                {tenPhim.substring(0, 8)}
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
        </NavLink>
    )
}
