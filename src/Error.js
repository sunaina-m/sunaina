import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './style/Button';

const Error = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='Error'>
          <h2>404 </h2>
          <h3>OH! OH! You're Lost, </h3>
          <p>The page  you are looking for does not exist.Click the button below to go back to home page.</p>
          <Button>
            <NavLink to='/'>Home</NavLink>
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.container{
  padding: 4rem 0;
  text-align:center;
}
h2{
  font-size:10rem;
}
h3{
  font-size:3.2rem;
}
p{
  font-size:2.2rem;
  padding-bottom: 2rem;
}



`;

export default Error;
