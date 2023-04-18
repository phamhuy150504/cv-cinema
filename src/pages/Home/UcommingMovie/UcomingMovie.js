import React, { useEffect, useState } from 'react'
import { MovieService } from '../../../services/movieService'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import CartMovie from './CartMovie';
import Trailer from '../../../components/trailer/Trailer';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1023, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 767, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function UcomingMovie() {
  const [listMovie, setListMovie] = useState([])
  const [changeListMovie, setchangeListMovie] = useState(true)
  const [trailer, setTrailer] = useState(true)


  useEffect(() => {
    const fetchListMovie = async () => {
      try {
        const result = await MovieService().getListMovie()
        setListMovie(result.data.content)
      } catch (error) {
        console.log(error);
      }
    }

    fetchListMovie()
  }, [])


// handle 
  const nowShowing = []
  const comingSoon = []
  listMovie.map(item => {
    if(item.dangChieu) {
      console.log(1);
      nowShowing.push(item)
    } else {
      comingSoon.push(item)
    }
  })

  const renderListMovie = () => {
    if (changeListMovie) {
      return nowShowing.map((movie, index) => <CartMovie trailer={trailer} setTrailer={setListMovie} key={index} movie={movie} />)
    }
    return comingSoon.map((movie, index) => <CartMovie trailer={trailer} setTrailer={setListMovie} key={index} movie={movie} />)
  }

  const handleChangeMovie = (check) => {
    setchangeListMovie(check)
  }


// ---------------------------------------------------------------- 
  return (
    <section className=' h-full w-full bg-cover bg-center' style={{ backgroundImage: 'url(https://themehut.co/wp/movflx/wp-content/uploads/2022/08/ucm_bg.jpg)' }}>
      <div className='w-full h-full bg-black bg-opacity-90'>
        <div className='pt-16 pb-10 container mx-auto space-y-16'>

          <div className='flex md:justify-between md:flex-row flex-col items-center justify-center md:space-y-0 space-y-5 md:text-left text-center'>

            <div className='space-y-3'>
              <span className="text-[#E4D807] text-sm">ONLINE STREAMING</span>
              <h2 className="text-4xl text-white font-bold">Upcoming Movies</h2>
            </div>

            <ul className='flex justify-end mt-auto h-3/4 space-x-5 text-white text-sm'>
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


          <Carousel autoPlay={true} autoPlaySpeed={3000} className='text-white text-center space-x-5' responsive={responsive}>
            
            {renderListMovie()}

          </Carousel>

        </div>
      </div>

      <Trailer src={'https://www.youtube.com/embed/X0tOpBuYasI'} trailer={trailer} setTrailer={setTrailer} /> 
      
    </section>
  )
}
