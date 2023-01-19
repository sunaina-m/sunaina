import React from 'react'
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Button } from '../style/Button';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        <footer>
          <div className="container grid grid-three-column">
            <div className='footer-about'>
              <h3>Our Mission</h3>
              <p>So seed seed green that winged cattle in.
                Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living.</p>
            </div>
            <div className='footer-soical'>
              <h3>Follow us</h3>
              <div className='footer-social--icons'>
                <div>
                  <FaFacebook className='icons' />
                </div>
                <div>
                  <FaInstagram className='icons' />
                </div>
                <div>
                  <FaYoutube className='icons' />
                </div>
                <div>
                  <FaTwitter className='icons' />
                </div>
              </div>

            </div>
            <div className='footer-contact'>
              <h3>Contact us</h3>
              <h2 className="sm-head">
                Head Office
              </h2>
              <p className='sm-detail'>123, Main Street, Your City</p>
              <h2 className="sm-head">
                <span className="fa fa-location-arrow"></span>
                Phone Number
              </h2>
              <p className='sm-detail'>+123 456 7890</p>
              <p className='sm-detail'>+123 456 7890</p>
              <h2 className="sm-head">
                <span className="fa fa-location-arrow"></span>
                Email
              </h2>
              <p className='sm-detail'>free@infoexample.com</p>
              <p className='sm-detail'>free@infoexample.com</p>


            </div>

          </div>
        </footer>
      </Wrapper>

    </>
  )
}
const Wrapper = styled.section`
.contact-short {
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);
  .grid div:last-child {
    justify-self: end;
    align-self: center;
  }
}
footer{
padding: 14rem 0 9rem 0;
background-color: ${({ theme }) => theme.colors.footer_bg};
h3 {
  color: ${({ theme }) => theme.colors.hr};
  margin-bottom: 2.4rem;
}
p {
  color: ${({ theme }) => theme.colors.white};
}

.footer-social--icons {
  display: flex;
  gap: 2rem;
  div {
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    .icons {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.4rem;
      position: relative;
      cursor: pointer;
    }
  }
}
}
.sm-detail{
  color: #7b838a;
  margin-top: 0;
  
  margin-bottom: 15px;
}
.sm-head{
  color: #fff;
  margin-bottom: 0px;
  font-size: 1.8rem;
    font-weight: 400;
}
`;

export default Footer
