import React, { useEffect, useRef } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'

export default function Search({ search, setSearch, changeSearch }) {
    const refSearch = useRef()

// handle events 
    useEffect(() => {
        let handleSearch = (event) => !refSearch.current.contains(event.target) && setSearch(false)
        document.addEventListener('mousedown', handleSearch)

        return () => document.removeEventListener('mousedown', handleSearch)
    }, [])

// ----------------------------------------------------------------
    return (
        <div className={search ? 'w-screen h-screen bg-[rgba(23,26,33,.95)] z-50 fixed ' : 'hidden'}>
            <div className='w-full flex items-center justify-center h-full text-white'>
                <form ref={refSearch} className='border-b-4 border-[rgba(255,255,255,.1)] w-3/4 relative'>
                    <p onClick={changeSearch} className='absolute -top-28 right-5 text-3xl text-white hover:cursor-pointer'>
                        <GrClose />
                    </p>
                    
                    <input 
                    className=' text-white bg-inherit p-5 text-3xl w-5/6 focus-visible:outline-none ' type="text" placeholder='What movie are you looking for...' />
                   
                    <button 
                    className=' text-5xl text-[#E4D807] duration-200 font-bold'>
                        <BiSearchAlt2 />
                    </button>
                </form>
            </div>
        </div>
    )
}
