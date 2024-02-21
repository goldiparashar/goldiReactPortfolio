import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { IoLogoDribbble } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaGithub} from "react-icons/fa";

const Wrapper=styled.section`
h2{
  font-size:75px;
  text-align:left;
}
@media (max-width:991px){
  h2{
    font-size:50px;
    text-align:center;
  }
}
`;

function Footer() {
  const Button = styled.button`
  background: ${(props)=>props.variant==='primary'?'green':'transparent'};
  color:#fff;
  font-size: 20px;
  padding: 18px 19px;
  border: 1px solid #fff;
  border-radius: 3px;
  max-width:310px;
  width:100%;
  text-decoration:none;
  text-align:left;
  display:inline-block;
  font-weight:400;
  transition:.3s linear;
  &:hover{
    background:#fff;
    color: var(--dark-color);
  }
  @media(max-width:991px){
    padding: 16px 19px;
    font-size:16px;
  }
`;
const Ul=styled.ul`
  list-style-type:none;
  display:flex;
  justify-content:end;
  transition:.3s linear;
  li{
    padding-right:10px;
    &:last-child{
      padding-right:0;
    }
    a{
      border:1px solid #fff;
      border-radius:50%;
      width:32px;
      height:32px;
      display:flex;
      align-items:center;
      justify-content:center;
      text-decoration:none;
      color:#fff;
    }
    a:hover{
      background-color:#fff;
      color:var(--dark-color);
    }
  } 
`;

  return (
    <Wrapper>
      <Container fluid="md" className='py-5'>
        <Row>
          <Col lg="6" md='12'>
            <h2>Let's Work Together -</h2>
          </Col>
          <Col lg="6" md='12' className='text-lg-end text-center py-3 py-lg-0 mx-auto'>
            <Button as='a' href='mailto:goldiprasher0@hmail.com' target='_blank' className='mb-4 mx-2'><span className='pe-3'><MdOutlineAttachEmail /></span>goldiprasher0@gmail.com</Button>
            <Button as='a' href='https://github.com/goldiparashar' target='_blank' variant='primary' className='mx-2'><span className='pe-3'><FaGithub /></span>Connect on Github</Button>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <Row className='align-items-center py-4'>
            <Col md="6">© 2023 All rights reserved.
            </Col>
            <Col md="6">
              <Ul>
                <li><a href='javascript:;'><RiLinkedinFill /></a></li>
                <li><a href='javascript:;'><IoLogoDribbble /></a></li>
                <li><a href='javascript:;'><FaFacebookF /></a></li>
                <li><a href='javascript:;'><RiYoutubeFill /></a></li>
                <li><a href='javascript:;'><FaTwitter /></a></li>
              </Ul>
            </Col>
          </Row>
      </Container>
    </Wrapper>
  )
}

export default Footer
