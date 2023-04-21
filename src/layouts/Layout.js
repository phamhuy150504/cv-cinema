import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function Layout({ Component }) {
  return (
    <div>
        <Header />
        <Component />
        <Footer />
    </div>
  )
}
