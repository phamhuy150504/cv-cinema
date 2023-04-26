import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BackToTop from '../components/BackToTop/BackToTop'

export default function Layout({ Component }) {
  const ref = useRef(null)

  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setBackToTop(true) : setBackToTop(false)
    })

  }, [])
  
  return (
   <>
      <div>
          <Header resultRef={ref} />
          <div className='flex-grow'>
            <Component ref={ref} />
          </div>
          <Footer />
      </div>
      <BackToTop backToTop={backToTop} />
   </>
  )
}
