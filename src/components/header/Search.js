import React, { useEffect, useRef, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { MovieService } from '../../services/movieService'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'

export default function Search({ search, setSearch, changeSearch }) {
    const [listMovie, setListMovie] = useState([])
    const [nameOfMovie, setNameOfMovie] = useState('')
    const navigate = useNavigate()
    const refSearch = useRef()

// handle events 
    useEffect(() => {
        let handleSearch = (event) => !refSearch.current.contains(event.target) && setSearch(false)
        document.addEventListener('mousedown', handleSearch)

        const fetchListMovie = async () => {
            try {
                const res = await MovieService().getListMovie()
                setListMovie(res.data.content)
            } catch (error) {
                console.log(error);
            }
        }

        fetchListMovie()

        return () => document.removeEventListener('mousedown', handleSearch)
    }, [])


// handle events
    const handleChangeValueInput = (e) => {
        let { value } = e.target
        setNameOfMovie(value)
    }

    const handleSearchMovie = (e) => {
        e.preventDefault()
        let index = listMovie?.findIndex((movie) => {
            console.log(movie.tenPhim.toUpperCase())
            console.log(nameOfMovie.toUpperCase());
           return movie.tenPhim.toUpperCase().includes(nameOfMovie.toUpperCase())
        })

        if (index !== -1) {
            navigate(`/detail/${listMovie[index].maPhim}`)
            setSearch(false)
            message.success('Find the movie success')
        } else {
            message.error('Do not have any movies')
        }

    }

// ----------------------------------------------------------------
    return (
        <div className={search ? 'w-screen h-screen bg-[rgba(23,26,33,.95)] z-50 fixed ' : 'hidden'}>
            <div className='w-full flex items-center justify-center h-full text-white'>
                <form onSubmit={(e) => handleSearchMovie(e)} ref={refSearch} className='border-b-4 border-[rgba(255,255,255,.1)] w-3/4 relative'>
                    <p onClick={changeSearch} className='absolute -top-28 right-5 text-3xl text-white hover:cursor-pointer'>
                        <GrClose />
                    </p>
                    
                    <input 
                    onChange={(e) => handleChangeValueInput(e)}
                    className='text-white bg-inherit p-5 md:text-3xl sm:text-2xl text-xl w-5/6 focus-visible:outline-none ' type="text" placeholder='What movie are you looking for...' />
                   
                    <button 
                    className=' text-5xl text-[#E4D807] duration-200 font-bold'>
                        <BiSearchAlt2 />
                    </button>
                </form>
            </div>
        </div>
    )
}
