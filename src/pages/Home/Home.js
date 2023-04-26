import React from 'react'
import Banner from './Banner/Banner'
import UcomingMovie from './UcommingMovie/UcomingMovie'
import Theater from './Theater/Theater'
import Online from './Online/Online'
import BestMovie from './BestMovie/BestMovie'
import Letter from './Letter/Letter'

export default function Home() {
  return (
    <>
      <Banner />
      <UcomingMovie />
      <Online />
      <BestMovie />
      <Theater />
      <Letter />
    </>
  )
}
