import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

export default function Footer() {
  return (
    <div className='bg-[#171D23]'>
        <div className='container pt-12 pb-6 space-y-5'>
            <div className='md:grid md:grid-cols-4 md:space-y-0 space-y-4'>
                <div className='text-white font-thin space-y-1'>
                    <h3 className='text-lg pb-1 font-medium text-[#E4D807] '>GET IN TOUCH</h3>
                    <p className='cursor-pointer hover:text-[#E4D807]'>FAQs</p>
                    <p className='cursor-pointer hover:text-[#E4D807]'>Give us feedback</p>
                    <p className='cursor-pointer hover:text-[#E4D807]'>Contact us</p>
                </div>
                <div className='text-white font-thin space-y-1'>
                    <h3 className='text-lg pb-1 font-medium text-[#E4D807] '>ABOUT MOVIE STAR</h3>
                    <p className='cursor-pointer hover:text-[#E4D807]'>FAQs</p>
                    <p className='cursor-pointer hover:text-[#E4D807]'>Give us feedback</p>
                    <p className='cursor-pointer hover:text-[#E4D807]'>Contact us</p>
                </div>
                <div className='text-white font-thin space-y-1'>
                    <h3 className='text-lg pb-1 font-medium text-[#E4D807] '>LEGAL STUFF</h3>
                    <p className='cursor-pointer hover:text-[#E4D807]'>FAQs</p>
                    <p className='cursor-pointer hover:text-[#E4D807]'>Give us feedback</p>
                    <p className='cursor-pointer hover:text-[#E4D807]'>Contact us</p>
                </div>
                <div className='text-white font-thin space-y-1'>
                    <h3 className='text-lg pb-1 font-medium text-[#E4D807] '>CONNECT WITH US</h3>
                    <p className='flex items-center space-x-2 cursor-pointer hover:text-[#E4D807]'><span><FaFacebook /></span> <span>Facebook</span></p>
                    <p className='flex items-center space-x-2 cursor-pointer hover:text-[#E4D807]'><span><FiInstagram /></span><span> Instagram</span></p>
                </div>
            </div>
            <div className='border-t-2 border-gray-500 pt-5'>
                <h1 className='text-center font-semibold text-white'>Making by Pham Gia Huy</h1>
            </div>
        </div>
    </div>
  )
}
