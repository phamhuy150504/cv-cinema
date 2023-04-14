import React from 'react'
import Header from '../components/header/Header'

export default function Layout({ Component }) {
  return (
    <div>
        <Header />
        <Component />
    </div>
  )
}
