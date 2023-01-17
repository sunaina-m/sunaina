import React from 'react'
import styled from 'styled-components'

const Tursted = () => {
    return (
        <>
            <Wrapper className='brand-section'>
                <div className='container'>
                    <h3>Trusted by 1000+ Companies</h3>
                    <div className='grid grid-five-column'>
                        <div className='slider'>
                            <img src='./image/image2.png' alt=''></img>
                        </div>
                        <div className='slider'>
                            <img src='./image/image3.png' alt=''></img>
                        </div>
                        <div className='slider'>
                            <img src='./image/image4.png' alt=''></img>
                        </div>
                        <div className='slider'>
                            <img src='./image/image5.png' alt=''></img>
                        </div>
                        <div className='slider'>
                            <img src='./image/image6.png' alt=''></img>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};
.brand-section {
  padding: 12rem 0 0 0;
}
h3 {
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  font-weight: bold;
}
img {
  min-width: 10rem;
  height: 10rem;
}

    

`;

export default Tursted
