import React from 'react'

export default function Letter() {
    return (
        <div className='h-full w-full' style={{ backgroundImage: 'url("../img/newsletter_bg.jpg")' }}>
            <div className='container flex md:flex-row flex-col  items-center justify-between py-12 md:space-y-0 space-y-5'>
                <div className='md:text-left text-center'>
                    <h1 className='lg:text-3xl text-2xl font-bold'>TRIAL START FIRST 30 DAYS.</h1>
                    <h2 className='text-base font-semibold'>TRIAL START FIRST 30 DAYS.</h2>
                </div>

                <div className='relative md:w-1/2 w-full'>
                    <input type="text" className='w-full p-5 rounded' placeholder='Enter your email ...' />
                    <button className='absolute right-[2px] font-bold focus-visible:outline-none h-[95%] top-[2px] bg-black text-[#E4D807] px-7 shadow-sm rounded'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
