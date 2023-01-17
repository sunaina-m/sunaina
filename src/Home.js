import React from 'react'
import BannerSection from './Component/BannerSection'
import Services from './Component/Services'
import Tursted from './Component/Tursted'

const Home = () => {
  const data={
    name:"Elecrotnic Store"
  }
  return (
    <>
    <BannerSection myname={data}/>
    <Services/>
    <Tursted/>
      
    </>
  )
}

export default Home
