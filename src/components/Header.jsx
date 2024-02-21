import React from 'react'
import {NavLink } from 'react-router-dom'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from "react-icons/fa6";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GlobalStyle } from '../styles/GlobalStyle';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    
    <Container>
        <Row>
            <GlobalStyle></GlobalStyle>
                <Col>
                    <div className='d-flex w-100 justify-content-between'>
                        <NavLink to="/Home" className="text-decoration-none text-white fs-3">Goldi</NavLink>
                        <div>
                            <Button style={{backgroundColor:"#fff", color:"#0A0A0A", border:"#fff"}} onClick={handleShow}>
                                <FaBars/>
                            </Button>
                            <Offcanvas show={show} onHide={handleClose} placement="end" className='offcanvas'>
                                <Offcanvas.Header closeButton style={{justifyContent:"end"}}>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul className="mb-0 p-0 list-unstyled">
                                        <li className='p-2'>
                                            <NavLink className="text-decoration-none"  active to="/Home">Home</NavLink>
                                        </li>
                                        <li className='p-2'>
                                            <NavLink className="text-decoration-none"  active to="/Portfolio">Portfolio</NavLink>
                                        </li>
                                        <li className='p-2'>
                                            <NavLink className="text-decoration-none" to="/Process">Process</NavLink>
                                        </li>
                                        <li className='p-2'>
                                            <NavLink className="text-decoration-none" to="/Contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                </Col>
        </Row>
    </Container>
  )
}


export default Header
