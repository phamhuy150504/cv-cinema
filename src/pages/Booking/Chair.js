import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleBooked } from '../../toolkits/reducers/bookingSlice'


export default function Chair({  check, chair }) {
  const dispatch = useDispatch()
  const { listBooked } = useSelector(state => state.bookingSlice)
  const index = listBooked.findIndex(checked => checked.maGhe === chair.maGhe)

  const handleBooking = (choosing) => {
      dispatch(handleBooked(choosing))
  } 

  
  
// ----------------------------------------------------------------
  return (
        <>
            {chair.daDat ? <button onClick={() => handleBooking(chair)} style={{marginRight: check ? '20px' : '0px'}} className='bg-gray-500 cursor-not-allowed w-[24px] h-[22px] text-xs mx-[1px]' disabled>X</button>

            :

            chair.tenGhe <= 48 ? <button onClick={() => handleBooking(chair)} style={{marginRight: check ? '20px' : '0px'}} className={`border-2  w-[24px] h-[22px] text-xs mx-[1px]  ${index !== -1 ? 'bg-[#E4D807] border-[#E4D807]' : 'border-green-500  '}`}>{chair.tenGhe}</button> 

            : 
            
            <button onClick={() => handleBooking(chair)} style={{marginRight: check ? '20px' : '0px'}} className={`border-2 border-[#E4D807] duration-200 w-[24px] h-[22px] text-xs mx-[1px] ${index !== -1 ? 'bg-[#E4D807] border-[#E4D807]' : ''}`}>{chair.tenGhe}</button> 
            }
        </>
  )
}


