import React from 'react'
import BannerSection from './Component/BannerSection'
import { useProductContext } from './context/productContext';


const About = () => {
  const { myName } =useProductContext();
  
  const data={
    name:"OUR PREMIUM PRODUCT"
  }
  return (
    <>
    {myName}
    <BannerSection myname={data}/>
    </>
  )
}

export default About
