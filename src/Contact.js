import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <>
      <Wrapper >
        <h2 className='common-heading '>Contact Page</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0381643406076!2d76.71274661425512!3d30.717327481642464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee672d068ead%3A0xa0f9a9582575703!2sPhase%205%20Market%20sector%2059!5e0!3m2!1sen!2sin!4v1673951349365!5m2!1sen!2sin"
          width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>


        <div className='container'>
          <div className='contact-from'>
            <form action="https://formspree.io/f/xbjelogb" method="post" className="contact-inputs">

              <input type='text' name='username' placeholder='Username' required/>

              <input name="Email" id="email" type="email" placeholder='Email' />

              <textarea name="Message" style={{width: "495px" , height: "197px"}} placeholder="Enter you message"></textarea><br/>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
        text-align: center;
  
    .container {
      margin-top: 6rem;
      .contact-from {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }

`;

export default Contact
