import React from 'react'
import BannerSection from './Component/BannerSection'
import FeactureProduct from './Component/FeactureProduct'
import Services from './Component/Services'
import Tursted from './Component/Tursted'

const Home = () => {
  const data={
    name:"Electronic Store"
  }
  return (
    <>
    <BannerSection myname={data}/>
    < FeactureProduct/>
    <Services/>
    <Tursted/>
      
    </>
  )
}

export default Home
