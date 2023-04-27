import React, { useEffect, useState } from 'react'
import { MovieService } from '../../../services/movieService'
import "react-multi-carousel/lib/styles.css"
import CartMovie from './CartMovie';
import { setLoadingOff, setLoadingOn } from '../../../toolkits/reducers/SpinnerSlice';
import { useDispatch } from 'react-redux';


export default function UcomingMovie() {

  const [listMovie, setListMovie] = useState([])
  const [changeListMovie, setChangeListMovie] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoadingOn())
    const fetchListMovie = async () => {
      try {
        const result = await MovieService().getListMovie()
        setListMovie(result.data.content)
        dispatch(setLoadingOff())
      } catch (error) {
        dispatch(setLoadingOff())
      }
    }
    fetchListMovie()
  }, [])

// handle events
  const nowShowing = []
  const comingSoon = []
  listMovie.forEach((movie) => {
    if (movie.dangChieu) {
      nowShowing.push(movie)
    } else {
      comingSoon.push(movie)
    }
  })

  const renderListMovie = () => {
    if (changeListMovie) {
      return nowShowing.map((movie, index) => <CartMovie key={index} movie={movie} />)
    }
    return comingSoon.map((movie, index) => <CartMovie key={index} movie={movie} />)
  }

  const handleChangeMovie = (check) => {
    setChangeListMovie(check)
  }

// ---------------------------------------------------------------- 
  return (
    <section className=' h-full w-full bg-cover bg-center -z-50' style={{ backgroundImage: 'url(https://themehut.co/wp/movflx/wp-content/uploads/2022/08/ucm_bg.jpg)' }}>
      <div className='w-full h-full bg-black bg-opacity-90' style={{ backgroundImage: 'url("../img/ucm_bg_shape.png")' }}>
        <div className='pt-16 pb-10 container mx-auto space-y-16'>
          <div className='flex md:justify-between md:flex-row flex-col items-center justify-center md:space-y-0 space-y-5 md:text-left text-center'>

            <div className='space-y-3'>
              <span className="text-[#E4D807] text-sm">ONLINE STREAMING</span>
              <h2 className="text-4xl text-white font-bold">Upcoming Movies</h2>
            </div>

            <ul className='flex justify-end mt-auto h-3/4 space-x-5 text-white text-sm font-semibold'>
              <li onClick={() => handleChangeMovie(true)}>
                <button className={`px-5 py-2 border-2  rounded-3xl bg-[#12151e] ${changeListMovie ? 'border-2 border-[#E4D807]' : ''}`}>
                  Now Showing
                </button>
              </li>

              <li onClick={() => handleChangeMovie(false)}>
                <button className='px-5 py-2 border-2 focus:border-2 focus:border-[#E4D807] rounded-3xl bg-[#12151e]'>
                  Coming Soon
                </button>
              </li>
            </ul>
          </div>


          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>

            {renderListMovie()}

          </div>


        </div>
      </div>

    </section>
  )
}
