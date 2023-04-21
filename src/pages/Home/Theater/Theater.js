import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react'
import { MovieService } from '../../../services/movieService';
import ItemTheater from './ItemTheater';

export default function Theater() {
    const [theaterList, setTheaterList] = useState([])

    useEffect(() => {
        const fetchListTheater = async () => {
            try {
                const res = await MovieService().getTheaterList()
                setTheaterList(res.data.content)
            } catch (error) {
                console.log(error);
            }
        }

        fetchListTheater()
    }, [])

    // handle elements
    const renderListMovie = (theater) => {
        return theater.lstCumRap.map(movie => {
            return {
                key: movie.tenCumRap,
                label: (
                    <div className="w-60 truncate text-white hover:text-[#E4D807]">
                        <p className="font-medium">{movie.tenCumRap}</p>
                        <p className="text-xs text-gray-600">{movie.diaChi}</p>
                    </div>
                ),
                children: (
                    <div
                        style={{ height: '650px', overflowY: "scroll" }}
                        className="space-y-5"
                    >
                        {movie.danhSachPhim.map((itemMovie) => {
                            return <ItemTheater itemMovie={itemMovie} />;
                        })}
                    </div>
                ),
            };
        })
    }

    const renderTheaterList = () => {
        return theaterList.map(theater => ({
            key: theater.maHeThongRap,
            label: <img className='h-16' src={theater.logo} alt="logo-theater" />,
            children: (
                <Tabs style={{ height: '650px' }} tabPosition='left' className='text-white' defaultActiveKey="1" items={renderListMovie(theater)} />
            )
        }))
    }

    // ----------------------------------------------------------------
    return (
        <section className='lg:block hidden h-full w-full bg-cover bg-center' style={{ backgroundImage: 'url("../img/tr_movies_bg.jpg")' }}>
                <div className='py-20 space-y-12'>
                    <div className='text-center space-y-3'>
                        <h2 className='text-[#E4D807] text-sm'>ONLINE STREAMING</h2>
                        <h1 className='text-white text-4xl font-bold'>Top Rated Theater And Movie</h1>
                    </div>

                    <div className='w-3/4 mx-auto bg-white bg-opacity-70 rounded shadow-xl'>
                        <Tabs tabPosition='left' className='text-white py-5' defaultActiveKey="1" items={renderTheaterList()} />
                    </div>
                </div>
        </section>
    )
}



