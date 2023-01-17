import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
import Cart from './Cart';
import Footer from './Component/Footer';
import Contact from './Contact';
import Home from './Home'
import Product from './Product';
import Header from './Component/Header';
import SingleProduct from './SingleProduct';
import Error from './Error';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';


const App = () => {
  const theme = {
    colors: {
      bg: "#ECEFF1",
      heading: 'rgb(24 24 29)',
      text:'rgb(24 24 29)',
      helper:"#8490ff",
      btn:"rgb(98 84 243)",
      border:"rgba(98,84,243,0.5)",
      black:"#212529",
      white:"#fff",
      hr:"#ffffff",
      footer_bg:"#0a1435",
    },
    media :{
      mobile: "768px" , 
      tab:"998px"
    },

  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleproduct:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/error' element={<Error />} />

          </Routes>
          <Footer />
        </Router>
    </ThemeProvider>
  )
}

export default App

