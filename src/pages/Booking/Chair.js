import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleBooked } from '../../toolkits/reducers/bookingSlice'
import { localService } from '../../services/localService'
import { AiOutlineUser } from 'react-icons/ai'


export default function Chair({ chair }) {
  const dispatch = useDispatch()
  const { listBooked } = useSelector(state => state.bookingSlice)
  const index = listBooked.findIndex(checked => checked.maGhe === chair.maGhe)

  const handleBooking = (choosing) => {
      dispatch(handleBooked(choosing))
  }

  let ticketBooked = localService.get()?.taiKhoan === chair.taiKhoanNguoiDat
  
// ----------------------------------------------------------------
  return (
        <>
           
            {
            ticketBooked ? <button  className='bg-blue-500 text-white shadow-2xl cursor-not-allowed w-[24px] h-[22px] text-base mx-[1px] flex items-center justify-center' disabled><AiOutlineUser /></button> 
            
            :

            chair.daDat ? <button  className='bg-gray-500 cursor-not-allowed w-[24px] h-[22px] text-xs mx-[1px]' disabled>X</button>

            :

            chair.tenGhe <= 48 ? <button onClick={() => handleBooking(chair)} className={`border-2  w-[24px] h-[22px] text-xs mx-[1px]  ${index !== -1 ? 'bg-[#E4D807] border-[#E4D807]' : 'border-green-500  '}`}>{chair.tenGhe}</button> 

            : 
            
            <button onClick={() => handleBooking(chair)} className={`border-2 border-[#E4D807] duration-200 w-[24px] h-[22px] text-xs mx-[1px] ${index !== -1 ? 'bg-[#E4D807] border-[#E4D807]' : ''}`}>{chair.tenGhe}</button> 
            }
        </>
  )
}


