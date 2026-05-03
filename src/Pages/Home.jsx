import React from 'react'
import NavBer from '../Component/NavBer'
import { Form } from 'react-router'
import Footer from '../Component/Footer'
import Banner from '../Component/Banner'
import Box from '../Component/Box'
import Bikeinformation from '../Component/Bikeinformation'

function Home() {
  return (
    <>
      <NavBer/>
      <Banner/>
      <Box/>
      <Bikeinformation/>
      <Footer/>
     
    </>
  )
}

export default Home
