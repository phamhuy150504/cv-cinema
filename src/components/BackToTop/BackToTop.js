import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'

export default function BackToTop({ backToTop }) {
    const handleBackToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }  

  return (
    <>
        {
            backToTop && <button onClick={handleBackToTop} className='w-[45px] h-[45px] rounded-full bg-[#E4D807] flex items-center justify-center fixed bottom-8 right-8 text-xl hover:bg-[#171d22] hover:text-white duration-500'> <IoIosArrowUp /></button>
        }
    </>
  )
}
