import React, { useEffect, useState } from 'react'
import { MovieService } from '../../../services/movieService'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoadingOff, setLoadingOn } from '../../../toolkits/reducers/SpinnerSlice'

export default function BestMovie() {
    const [bestMovie, setBestMovie] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoadingOn())
        const fetchBestMovie = async () => {
            try {
                const res = await MovieService().getBestMovie()
                setBestMovie(res.data.content)
                dispatch(setLoadingOff())
            } catch (error) {
                dispatch(setLoadingOff())
                console.log(error);
            }
        }

        fetchBestMovie()
    }, [])

    const renderBestMovie = () => (
        bestMovie.map((item, index) => (
            <NavLink to={`/detail/${item.maPhim}`}>
                    <img key={index} className="lg:w-[290px] md:w-[250px] md:h-[150px]  w-full sm:mx-0 mx-auto shadow-2xl hover:-translate-y-4 duration-300 hover:cursor-pointer rounded-md bg-cover bg-center " src={item.hinhAnh} alt="hinhAnh" />
            </NavLink>
        ))
    )

    return (
        <div className='bg-[#1B2026] w-full h-hull' style={{ backgroundImage: 'url("../img/tv_series_bg.jpg")' }}>
            <div className='container py-12'>

                <div className='space-y-3 text-center'>
                    <span className="text-[#E4D807] text-sm">BEST TV SERIES</span>
                    <h2 className="text-4xl text-white font-bold">World Best TV Series</h2>
                </div>

                <div className='flex md:flex-row flex-col items-end md:justify-around justify-center pt-10 space-y-7'>
                    {renderBestMovie()}
                </div>

            </div>
        </div>
    )
}
