import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { bookingService } from '../../services/BookingService'
import { setLoadingOff, setLoadingOn } from '../../toolkits/reducers/SpinnerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineUser } from 'react-icons/ai'
import { fetListChair, removeListBooked } from '../../toolkits/reducers/bookingSlice'
import Chair from './Chair'
import Swal from 'sweetalert2'
import { localService } from '../../services/localService'

export default function Booking() {
    const [infoRoomTickets, setInfoRoomTickets] = useState()
    const { listBooked } = useSelector(state => state.bookingSlice)
    const navigate = useNavigate()
    const paramURL = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoadingOn())
        const fetchInfoRoomTickets = async () => {
            try {
                const res = await bookingService().getInfoRoomTickets(paramURL.id)
                setInfoRoomTickets(res.data.content)
                dispatch(fetListChair(res.data.content))
                dispatch(setLoadingOff())
            } catch (error) {
                dispatch(setLoadingOff())
            }
        }

        fetchInfoRoomTickets()

        return () => {
            dispatch(removeListBooked())
        }
    }, [])

    

    // handle events
    const handlePurchase = () => {
        if(localService.get() == null) {
            Swal.fire({
                icon: 'warning',
                title: 'You need login !',
            })
            navigate('/login')
        }
        if (listBooked.length <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Đặt Vé Thất Bại !',
                text: 'Vui Lòng Chọn Ghế',
            })
        } else {
            let infoBooking = {
                maLichChieu: paramURL.id,
                danhSachVe: listBooked
            }

            const postInfoBooking = async () => {
                dispatch(setLoadingOn())
                try {
                    const res = await bookingService().postBookingTickets(infoBooking)
                    const result = await bookingService().getInfoRoomTickets(paramURL.id)
                    setInfoRoomTickets(result.data.content)
                    dispatch(fetListChair(result.data.content))
                    dispatch(removeListBooked())

                    Swal.fire(
                        res.data.content,
                        'Vé đã được thanh toán và thêm vào lịch sử đặt vé!',
                        'success'
                    )
                    dispatch(setLoadingOff())
                } catch (error) {
                    dispatch(setLoadingOff())
                }
            }

            postInfoBooking()
        }
    }

    const renderListChair = () => {
        return infoRoomTickets?.danhSachGhe.slice(0, 158).map((chair, index) => {
            const indexChair = ['03', '15', '27', '39', '51', '63', '75', '87', '99', '111', '123', '135']
            const check = indexChair.includes(chair.tenGhe)
            return check
                ?
                <Fragment key={index}>
                    <button className='w-[24px] h-[22px] cursor-default mx-[1px]'></button>
                    <button className='w-[24px] h-[22px] cursor-default mx-[1px]'></button>
                    <Chair  key={index} chair={chair} check={check} />
                </Fragment>
                :
                <Chair key={index} chair={chair} check={check} />
        })}

    const renderChairBooked = () => (
        listBooked.map(item => <span className='text-[#E4D807]' key={item.tenGhe}>{item.tenGhe}, </span>)
    )

    const totalTicket = () => (
        listBooked.reduce((init, item) => {
            return init += item.giaVe
        }, 0).toLocaleString()
    )

    // ----------------------------------------------------------------
    return (
        <section className='min-h-screen w-full' style={{ backgroundImage: 'url("../img/bg_booking.jpg")' }}>
            <div className='container flex justify-center items-center py-24'>
                <div className='bg-white w-[970px] mx-auto'>

                    <div className='text-xl font-bold bg-black text-white w-full text-center py-1'>
                        BOOKING ONLINE
                    </div>

                    <div className='bg-[#FDFCF0] font-bold'>
                        <div className='flex items-center space-x-5 pt-2 pl-5'>
                            <h1 className='border-r-2 border-black pr-3'>{infoRoomTickets?.thongTinPhim.tenCumRap}</h1>
                            <h2>{infoRoomTickets?.thongTinPhim.tenRap}</h2>
                        </div>
                        <div className='flex items-center space-x-5 pb-2 pl-5'>
                            <h1>{infoRoomTickets?.thongTinPhim.gioChieu} ~ </h1>
                            <h2>{infoRoomTickets?.thongTinPhim.ngayChieu}</h2>
                        </div>
                    </div>

                    <div className='text-xl font-bold bg-[#BCBDC0] text-white w-full text-center py-1 mt-5'>
                        Người / Ghế
                    </div>


                    <div className='h-full pt-5 flex flex-col justify-center items-center'>

                        <div style={{ backgroundImage: 'url("../img/bg-screen.png")' }} className='h-[70px] w-full mt-5 mb-10  bg-center bg-cover bg-no-repeat'></div>

                        <div className='flex w-full justify-center items-center'>
                            <div className='flex w-[370px] flex-wrap'>

                                {renderListChair()}

                            </div>
                        </div>

                    </div>

                    <ul className='flex justify-between w-[300px] mx-auto pt-7'>
                        <li className='flex flex-col justify-center space-y-1'>
                            <div className='space-x-2 font-semibold text-sm'>
                                <button className='bg-gray-500 cursor-not-allowed w-[24px] h-[22px] text-xs mx-[1px]' disabled>X</button>
                                <span>Can't choose</span>
                            </div>

                            <div className='space-x-2 font-semibold text-sm'>
                                <button className='bg-[#E4D807]  cursor-not-allowed w-[24px] h-[22px] text-xs mx-[1px]' disabled>X</button>
                                <span>Checked</span>
                            </div>

                            <div className='space-x-2 font-semibold text-sm flex'>
                                <button className='bg-blue-500 text-white shadow-2xl cursor-not-allowed w-[24px] h-[22px] text-base mx-[1px] flex items-center justify-center' disabled><AiOutlineUser /></button>
                                <span>Your chair</span>
                            </div>
                        </li>

                        <li className='flex flex-col justify-center space-y-1'>
                            <div className='space-x-2 font-semibold text-sm'>
                                <button className='border-2 border-green-500 w-[24px] h-[22px] text-xs mx-[1px]'></button>
                                <span>Normal</span>
                            </div>

                            <div className='space-x-2 font-semibold text-sm'>
                                <button className='border-2 border-[#E4D807] w-[24px] h-[22px] text-xs mx-[1px]'></button>
                                <span>VIP</span>
                            </div>
                        </li>
                    </ul>

                    <div className='font-bold bg-black text-white w-full py-1 text-sm mt-8'>
                        <div className='container py-5'>
                            <ul className='flex md:flex-row  flex-col md:space-y-0 space-y-3 justify-center space-x-5'>
                                <li>
                                    <div className='flex space-x-2'>
                                        <img className='w-[74px] h-[108px] rounded' src={infoRoomTickets?.thongTinPhim.hinhAnh} alt="" />
                                        <div>
                                            <p className='md:text-sm text-xl'>{infoRoomTickets?.thongTinPhim.tenPhim}</p>
                                            <p>2D</p>
                                            <p>C18</p>
                                        </div>
                                    </div>
                                </li>

                                <li >
                                    <table>
                                        <tbody className='-translate-x-[17px] md:-translate-x-0'>
                                            <tr>
                                                <td className='font-normal'>Theater</td>
                                                <td className='pl-3'>{infoRoomTickets?.thongTinPhim.tenCumRap}</td>
                                            </tr>
                                            <tr>
                                                <td className='font-normal'>Showtime</td>
                                                <td className='flex space-x-1 pl-3'>
                                                    <h1>{infoRoomTickets?.thongTinPhim.gioChieu} ~  </h1>
                                                    <h2>{infoRoomTickets?.thongTinPhim.ngayChieu}</h2></td>
                                            </tr>
                                            <tr>
                                                <td className='font-normal'>Room</td>
                                                <td className='pl-3'>{infoRoomTickets?.thongTinPhim.tenRap}</td>
                                            </tr>
                                            <tr>
                                                <td className='font-normal'>Chair</td>
                                                <td className='pl-3'>
                                                    {renderChairBooked()}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>

                                <li className='space-y-4 -translate-x-[17px] md:-translate-x-0'>
                                    <h1 className='text-xl text-[#E4D807] '>Total:
                                        <span className='text-white ml-1'>
                                            {totalTicket()} VNĐ
                                        </span>
                                    </h1>

                                    <button onClick={handlePurchase} className='px-10 py-1 border-2 border-[#E4D807] bg-[#E4D807] rounded-sm font-semibold hover:text-white hover:bg-opacity-0 duration-300'>Purchase</button>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
