import React from 'react'
import { CgMouse } from "react-icons/cg";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Col, Container, Row } from 'react-bootstrap';

function Process() {

  const[Purpose]=useTypewriter({
    words:['orking Process'],
    loop: 0,
    delaySpeed:500,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
})
const para={
  'font-size':'24px',
  'color':'#A9A9A9'
}
const lightGray={
  'color':'#A9A9A9'
}
  return (
    <>
    <Container>
        <Row>
            <Col>
            <div className='home-wrapper text-center vh-100 d-flex align-items-center flex-column justify-content-center position-relative'>
                <h1><b className='text-white'>W{Purpose}</b></h1>
                <p>How I Combine design and technology to create exceptional <br></br>user experiences.</p>
                {/* <div className='mouse-animate fs-3 text-center'>
                    <CgMouse />
                </div> */}
            </div>
            </Col>  
        </Row>
        <hr></hr>
        <Row className='py-5'>
          <Col md="4">
            <span className='mb-2 d-inline-block' style={lightGray}>Step 01</span>
            <h3>Get Started</h3>
          </Col>
          <Col md="8">
            <p style={para}>Starting with create a coming soon page for your website.</p>
            <p style={para}><b className='text-white'>Why?</b> Because It builds anticipation: A coming soon page generates buzz and excitement about your website before it even launches. This can be particularly helpful for new businesses or startups that want to generate interest and curiosity around their brand.</p>
            <hr className='my-5'></hr>
          </Col>
          <Col md="4">
            <span className='mb-2 d-inline-block' style={lightGray}>Step 02</span>
            <h3>Planning</h3>
          </Col>
          <Col md="8">
            <p style={para}>At Begin by defining the goals and objectives of the website. This includes understanding the target audience, identifying the key features and functionality required, and establishing a timeline for the project.</p>
            <p style={para}>Develop a detailed plan for the project, including the site architecture, wireframes, and design concept with should also include a content strategy and a plan for search engine optimization.</p>
            <hr className='my-5'></hr>
          </Col>
          <Col md="4">
            <span className='mb-2 d-inline-block' style={lightGray}>Step 03</span>
            <h3>Design</h3>
          </Col>
          <Col md="8">
            <p style={para}><b className='text-white'>Identify branding elements:</b> The first step in creating the visual design of a website is to identify the client's branding elements. This includes their logo, color palette, typography, and any other design elements that are part of your brand identity.</p>
            <p style={para}><b className='text-white'>Choose imagery:</b> It's important to choose images that are high-quality, relevant to the content, and consistent with the brand identity. This can include photographs, illustrations, icons, and other graphic elements.</p>
            <p style={para}><b className='text-white'>Create a design concept:</b> That aligns with the your goals and objectives. This involves creating a mockup or prototype of the website that incorporates these elements and establishes a visual hierarchy for the content.</p>
            <p style={para}><b className='text-white'>Refine the design:</b> After the initial design concept has been created, we will take a feedback from you. and we are ready to making some adjustments (if needed) to the layout, color scheme, typography, or imagery to better align with your goals and objectives. </p>
            <hr className='my-5'></hr>
          </Col>
          <Col md="4">
            <span className='mb-2 d-inline-block' style={lightGray}>Step 04</span>
            <h3>Development</h3>
          </Col>
          <Col md="8">
            <p style={para}>We will present a fully design demo website with mobile responsive  design and it will iterate to get the visual right. After design approval we will develop the website. </p>
            <p style={para}>I will use platform like, Wordpress, Webflow, Elementor, and Shopify to develop the website complete with a CMS (content management system) that will allow you to edit/manage your website’s content without the need for a developer. </p>
            <hr className='my-5'></hr>
          </Col>
          <Col md="4">
            <span className='mb-2 d-inline-block' style={lightGray}>Step 05</span>
            <h3>Launching</h3>
          </Col>
          <Col md="8">
            <p style={para}>Testing: Conduct thorough testing of the website, including functional testing, user testing, and performance testing. This ensures that the website works as intended and meets user expectations.</p>
            <p style={para}>Launch: Once the website has been thoroughly tested and approved, launch it to the public. This includes setting up hosting, domain registration, and any necessary DNS settings.</p>
          </Col>
        </Row>
    </Container>
      <hr></hr>
    </>
  )
}

export default Process
