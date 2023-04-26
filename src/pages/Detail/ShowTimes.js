import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { theaterService } from '../../services/TheaterService';
import moment from 'moment/moment';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkits/reducers/SpinnerSlice';


export default function ShowTimes({ maPhim }) {
    const [showTimes, setShowTimes] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoadingOn())
        const fetchShowTimes = async () => {
            try {
                const res = await theaterService().getInfoShowTimes(maPhim)
                setShowTimes(res.data.content)
                dispatch(setLoadingOff())
            } catch (error) {
                dispatch(setLoadingOff())
                console.log(error);
            }
        }

        maPhim && fetchShowTimes()
    }, [maPhim])
    // handle     
    const renderShowTimes = (listTheater) => (
        listTheater.map(theater => {
            return (
                <div className='pl-5 space-y-5'>
                    <h1 className='font-bold text-xl'>{theater.tenCumRap}</h1>

                    <div className='grid lg:grid-cols-3 gap-3'>
                        {theater.lichChieuPhim.map(button => {
                            return <NavLink to={`/booking/${button.maLichChieu}`}>
                                <button className='px-5 py-1 border-2 text-black hover:text-white border-[#E4D807] bg-[#E4D807] rounded-sm font-semibold hover:bg-opacity-0 duration-300'>
                                    {moment(button.ngayChieuGioChieu).format("DD-mm-yyyy ~ hh:mm")}
                                </button>
                            </NavLink>
                        })}
                    </div>

                </div>
            )
        })
    )

    const renderTheaterShowTimes = () => {
        return showTimes.heThongRapChieu?.map((theater) => {
            return {
                key: theater.maHeThongRap,
                label: <img className='h-16' src={theater.logo} alt="logo-theater" />,
                children: <div className='space-y-5'>
                    {renderShowTimes(theater.cumRapChieu)}
                </div>
            }
        })
    }

    // ----------------------------------------------------------------
    return (
        <section className='h-full w-screens' style={{ backgroundImage: 'url("../img/tv_series_bg.jpg")' }}>
            <div className='container flex items-center justify-center py-16'>
                <div className='space-y-7'>

                    <h2 className='text-center text-5xl font-bold text-white'>Show Times</h2>

                    <div className='border-2 border-white rounded-lg'>
                        <Tabs className='p-5 text-white' tabPosition='left' defaultActiveKey="1" items={renderTheaterShowTimes()} />
                    </div>

                </div>
            </div>
        </section>
    )
}
