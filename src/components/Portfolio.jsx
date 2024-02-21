import React, { useEffect, useState } from 'react'
import { GlobalStyle } from '../styles/GlobalStyle';
import { CgMouse } from "react-icons/cg";
import { Col, Container, Row } from 'react-bootstrap';
import { MdArrowOutward } from "react-icons/md";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import jsonData from './projectImages.json';

function Portfolio() {
  const[Purpose]=useTypewriter({
    words:['talent,'],
    loop: 0,
    delaySpeed:500,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
})
const[Code]=useTypewriter({
    words:['passion'],
    loop: 0,
    delaySpeed:800,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
})

const[data,setData]=useState([]);
useEffect(()=>{
  setData(jsonData);
})

  return (
    <>
    <Container>
        <Row>
            <Col>
            <div className='home-wrapper text-center vh-100 d-flex align-items-center flex-column justify-content-center position-relative'>
                <h1>Showcasing my <b className='text-white'>{Purpose}</b><br></br>
                    and <b className='text-white'>{Code}</b>
                </h1>
                {/* <div className='mouse-animate fs-3 text-center'>
                    <CgMouse />
                </div> */}
            </div>
            </Col>  
        </Row>
    </Container>
    <hr></hr>
    <Container>
        <Row className='py-5 gy-4'>
            <Col lg="7" md='12'>
                <div>Selected Projects </div>
                <p>Discover my skills and creativity in action, with just one click.</p>
            </Col>
                {
                    data.map((user)=>(
                        <Col key={user.id} lg='6' md='12' className='position-relative pb-5'>
                            <img src={user.img} className='w-100 mb-3 object-fit-contain' style={{height:'400px', backgroundColor:'whitesmoke',borderRadius:'20px'}}></img>
                            <div className='proj-tags d-flex justify-content-between w-100 px-3'>
                            <button className='pill-btn text-white'>{user.tech}</button>
                            <a href={user.link} className='pill-btn text-white text-decoration-none' target='_blank'>View Project <MdArrowOutward /></a>
                            </div>
                        </Col>
                    ))
                }
        </Row>
    </Container>
    </>
  )
}

export default Portfolio
