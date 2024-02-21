import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col} from 'react-bootstrap';
import { GlobalStyle } from '../styles/GlobalStyle';
function Contact() {
  const FormWrapper=styled.div`
    background-color:rgba(90, 90, 90, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding:30px;
    label{
      font-size:18px;
    }
    button{
      background-color:#1D6400;
      border:#1D6400;
    }
    button:hover,button:focus,button:active{
      background-color:#1D6401;
      border:#1D6400;
    }
  `;
  return (
    <>
      <Container className='vh-100'>
        <Row className='py-5'>
          <Col md='8' className='offset-md-2'>
            <FormWrapper>
              <Form action='https://formspree.io/f/xyyrwazj' method='POST'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Email:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name='email' autoComplete='off' required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Your Message:</Form.Label>
                  <Form.Control as="textarea" placeholder="Leave a comment here" name="message" autoComplete='off' required style={{ height: '100px' }}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Choose File</Form.Label>
                  <Form.Control type='file' multiple name='file' autoComplete='off'></Form.Control>
                </Form.Group>

                <Button variant="success" type="submit">Submit</Button>
                </Form>
            </FormWrapper>
          </Col>
        </Row>
      </Container>
      <hr></hr>
    </>
  )
}

export default Contact
