import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../style/Button';

const BannerSection = ({myname}) => {
    console.log(myname)
    const {name} = myname
    return (
        <>
            <Wrapper>
                <div className='container'>
                    <div className='grid grid-two-column'>
                        <div className='banner-section-data'>
                            <p className='intro-data'> Welcome to </p>
                            <h1>{name}</h1>
                            <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                                dolor interdum nulla.
                            </p>
                            <NavLink to='/Product'>
                                <Button>Discover More</Button>
                            </NavLink>
                        </div>
                        <div className='banner-section-img'>
                            <figure >
                                <img src='./image/hero.jpg' alt='banner' className='img-style'></img>
                            </figure>
                        </div>
                    </div>
                </div>


            </Wrapper>

        </>
    )
}
const Wrapper = styled.section`
padding: 12rem 0;
img {
  min-width: 10rem;
  height: 10rem;
}
.banner-section-data {
  p {
    margin: 2rem 0;
  }
  h1 { 
    text-transform: capitalize;
    font-weight: bold;
  }
  .intro-data {
    margin-bottom: 0;
  }
}
.banner-section-img {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;
  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }
  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: rgba(81, 56, 238, 0.4);
  }
}
`;
export default BannerSection
