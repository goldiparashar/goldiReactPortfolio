import React, { useState } from 'react'
import { MdWavingHand } from "react-icons/md";
import { GlobalStyle } from '../styles/GlobalStyle';
import { CgMouse } from "react-icons/cg";
import { Col, Container, Row } from 'react-bootstrap'
import About from './About';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Home() {
    const[Purpose]=useTypewriter({
        words:['Purpose,'],
        loop: 0,
        delaySpeed:500,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    const[Code]=useTypewriter({
        words:['Code Expertise.'],
        loop: 0,
        delaySpeed:800,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

  return (
    <>
    <Container>
        <Row>
            <Col>
            <div className='home-wrapper text-center vh-100 d-flex align-items-center flex-column justify-content-center position-relative'>
                <h1>Designing with <b className='text-white'>{Purpose}</b><br></br>
                    Building with <b className='text-white'>{Code}</b>
                </h1>
                <button className='pill-btn text-white mt-4 hello-btn'>Say hi <span className='ms-1 icon'>👋</span></button>
                {/* <div className='mouse-animate fs-3 position-absolute'>
                    <CgMouse />
                </div> */}
            </div>
            </Col>  
        </Row>
    </Container>
    <hr></hr>
    <About></About>
    <hr></hr>
    </>
  )
}

export default Home
