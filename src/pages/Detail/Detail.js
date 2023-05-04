import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieService } from '../../services/movieService'
import { AiFillClockCircle, AiFillLike } from 'react-icons/ai'
import { BsPlayCircle } from 'react-icons/bs'
import { Progress, Space } from 'antd'
import ShowTimes from './ShowTimes'
import Trailer from '../../components/trailer/Trailer'
import { useDispatch } from 'react-redux'
import { setLoadingOff, setLoadingOn } from '../../toolkits/reducers/SpinnerSlice'

export default function Detail() {
    const [trailer, setTrailer] = useState(true)
    const [detailMovie, setDetailMovie] = useState({})
    const paramUrl = useParams()
    const dispatch = useDispatch()
    const ref = useRef()

    useEffect(() => {
        dispatch(setLoadingOn())
        const fetchDetailMovie = async () => {
            try {
                const res = await MovieService().getDetailMovie(paramUrl.id)
                setDetailMovie(res.data.content)
                dispatch(setLoadingOff())
            } catch (error) {
                dispatch(setLoadingOff())
            }
        }

        fetchDetailMovie()
    }, [])

    // handle events
    const handleScrollShowTime = () => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleShowTrailer = () => setTrailer(false)

    // ----------------------------------------------------------------
    return (
        <>
            <section className='h-full pb-20 w-full' style={{ backgroundImage: 'url("../img/movie_details_bg.jpg")' }}>
                <div className='container flex md:flex-row flex-col items-center pt-32 md:space-y-0 space-y-10'>

                    <div className='md:w-2/4 lg:w-1/4 w-full md:flex-none flex justify-center'>
                        <div className='relative w-[303px] h-[430px] md:w-[290px] md:h-[410px] rounded-lg'>
                            <img className='w-full h-full rounded-lg' src={detailMovie.hinhAnh} alt="img" />
                            <div>
                                <button onClick={handleShowTrailer} className='absolute top-1/2 left-1/2 text-[75px] -translate-x-1/2 -translate-y-1/2 text-gray-400'>
                                    <BsPlayCircle />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-2/4 w-3/4 md:pl-10 md:pr-10 md:space-y-5 space-y-3'>
                        <h2 className='text-[#E4D807] font-bold md:text-2xl text-3xl'>New Episodes</h2>
                        <h1 className='font-bold text-white lg:text-5xl md:text-4xl sm:text-[40px] text-[30px]'>{detailMovie.tenPhim}</h1>
                        <ul className='flex text-xs text-white space-x-5'>
                            <li>
                                <span className="text-[#E4D807] font-semibold border-gray-500 border-2 px-2">HD</span>
                            </li>
                            <li className='text-sm font-semibold'>
                                <span className='hover:text-[#E4D807] cursor-pointer'>Comedy, </span>
                                <span className='hover:text-[#E4D807] cursor-pointer'>Movie</span>
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

                        <h3 className='text-gray-500 text-sm font-semibold italic'>
                            {detailMovie.moTa}
                        </h3>

                        <div>
                            <button onClick={handleScrollShowTime} className='px-10 py-1 border-2 border-[#E4D807] bg-[#E4D807] rounded-lg font-semibold hover:text-white hover:bg-opacity-0 duration-300'>
                                Buy Ticket
                            </button>
                        </div>
                    </div>

                    <div className='text-center space-y-10 lg:block hidden'>
                        <Space wrap>
                            <Progress strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }} type="circle" percent={detailMovie.danhGia * 10} className='text-yellow-500' format={(percent) => `${percent / 10} Score`} />
                        </Space>
                    </div>

                </div>
            </section>

            <div ref={ref}>
                <ShowTimes maPhim={detailMovie?.maPhim} />
            </div>

            {!trailer && <Trailer src={detailMovie.trailer} trailer={trailer} setTrailer={setTrailer} />}
        </>
    )
}
