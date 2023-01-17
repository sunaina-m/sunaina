import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import styled from 'styled-components'

const Header = () => {
  const MainHeader = styled.header`
        padding:1rem 4.8rem;
        height:8rem;
        display:flex;
        justify-content : space-between;
        align-item:center;
        background-color: ${props => props.theme.colors.bg};
        position:relative;
        
        .logo{
        height:5rem;
        }
`;
  return (
    <>
      <MainHeader>
        <NavLink to="/">
          <img src='../Image/logo.png' alt='' className='logo'></img>
        </NavLink>
        <NavBar />
      </MainHeader>
    </>
  )
};



export default Header
