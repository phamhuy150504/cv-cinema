import React, { useEffect, useState } from 'react'
import { MovieService } from '../../../services/movieService'

export default function BestMovie() {
    const [bestMovie, setBestMovie] = useState([])

    useEffect(() => {
        const fetchBestMovie = async () => {
            try {
                const res = await MovieService().getBestMovie()
                setBestMovie(res.data.content)
            } catch (error) {
                console.log(error);
            }
        }

        fetchBestMovie()
    }, [])

    const renderBestMovie = () => (
        bestMovie.map((item, index) => (
            <div key={index} className='lg:w-[290px] md:w-[250px] sm:w-[300px] w-[350px] sm:mx-0 mx-auto shadow-2xl hover:-translate-y-4 duration-300 hover:cursor-pointer'>
                <img className=" rounded-md bg-cover bg-center " src={item.hinhAnh} alt="hinhAnh" />
            </div>
        ))
    )

    return (
        <div className='bg-[#1B2026] w-full h-hull' style={{backgroundImage: 'url("../img/tv_series_bg.jpg")'}}>
            <div className='container py-12'>

                <div className='space-y-3 text-center'>
                    <span className="text-[#E4D807] text-sm">BEST TV SERIES</span>
                    <h2 className="text-4xl text-white font-bold">World Best TV Series</h2>
                </div>

                <div className='flex md:flex-row flex-col items-center md:justify-around justify-center text-center pt-10 space-y-5'>
                    {renderBestMovie()}
                </div>

            </div>
        </div>
    )
}
