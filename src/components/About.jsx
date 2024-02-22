import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { IoLogoDribbble } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaGithub} from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IoLogoWordpress } from "react-icons/io";
import { DiPhotoshop } from "react-icons/di";
import { RiHtml5Line } from "react-icons/ri";
import { BsFiletypeCss } from "react-icons/bs";
import { RiBootstrapLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import jsonData from './projectImages.json';
import jsonData1 from './technology.json';

const IconMap = {
    DiPhotoshop: DiPhotoshop,
    RiHtml5Line: RiHtml5Line,
    RiBootstrapLine: RiBootstrapLine,
    BsFiletypeCss: BsFiletypeCss,
    FaReact: FaReact,
    IoLogoWordpress:IoLogoWordpress
  };

function About() {
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
`
const CompaniesExp= styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center
    justify-content: space-between;
    // border:1px solid #fff;
  .company-name{
    border:1px solid #fff;
    img{
        width:200px;
        height:50px;
        object-fit:contain;
    }
    p{
        font-size:20px;
        color:var(--dark-gray-color);
        margin-bottom:0;
    }
  }
`;

const [data,setData]=useState([]);
const [visible,setVisible]=useState(4);

useEffect(()=>{
    setData(jsonData);
},[]);

const showMoreitem=()=>{
    setVisible((prevValue)=>prevValue+2);
}

const[tech,setTech]=useState([]);
useEffect(()=>{
    setTech(jsonData1);
},[]);

  return (
    <>
    <Container>
        <Row className='align-items-center py-5'>
            <Col sm="6 pb-4">
                <div>About</div>
            </Col>
            <Col sm="6 pb-4">
                <Ul>
                    <li><a href='javascript:;'><RiLinkedinFill /></a></li>
                    <li><a href='javascript:;'><IoLogoDribbble /></a></li>
                    <li><a href='javascript:;'><FaFacebookF /></a></li>
                    <li><a href='javascript:;'><RiYoutubeFill /></a></li>
                    <li><a href='javascript:;'><FaTwitter /></a></li>
                </Ul>
            </Col>
            <Col sm="12">
                <p>Hi, I am Goldi! I'm a Frontend Developer with 2 years experience with the past 2 years spent honing my skills in HTML, CSS, bootstrap, Javascript, Jquery, React Js, Adobe Photoshop.</p>
            </Col>
            <Col md="8">
                <p>1 understand the importance of a Pixel-perfect Website, pride myself on producing high-quality websites, and I'm comfortable working solo or as part of a team.</p>
            </Col>
            <Col md="4">
                <div className='profile-pic'>
                    <img src='images/profile-img.jpg' className='w-100 rounded-circle'></img>
                </div>
            </Col>
        </Row>
    </Container>
    <CompaniesExp>
        <Col md="3" sm='6' xs='12' className='company-name px-2 py-3 text-center flt-gray'>
            <img src='images/think360logo.png'></img>
            <p>Frontend Developer -2023</p>
        </Col>
        <Col md="3" sm='6' xs='12' className='company-name px-2 py-3 text-center'>
            <img src='images/cybersifylogo.png'></img>
            <p>Web Designer -2022</p>
        </Col>
        <Col md="3" sm='6' xs='12' className='company-name px-2 py-3 text-center'>
            <img src='images/matridtechlogo.png'></img>
            <p>Web Designer -2021</p>
        </Col>
        <Col md="3" sm='6' xs='12' className='company-name px-2 py-3 text-center'>
            <img src='images/seodiscoverylogo.png'></img>
            <p>Web Designer -2019</p>
        </Col>
    </CompaniesExp>
    <Container>
        <Row className='py-5 gy-4'>
            <Col lg="7">
                <div>About</div>
                <p>1 craft digital solutions that showcase my passion and expertise in design and development.</p>
            </Col>
                {
                    data.slice(0,visible).map((user)=>(
                        <Col key={user.id} lg='6' md='12' className='position-relative pb-5'>
                            <img src={user.img} className='w-100 mb-3 object-fit-contain' style={{height:'400px', backgroundColor:'whitesmoke',borderRadius:'20px'}}></img>
                            <div className='proj-tags d-flex justify-content-between w-100 px-3'>
                            <button className='pill-btn text-white'>{user.tech}</button>
                            <a href={user.link} className='pill-btn text-white text-decoration-none' target='_blank'>View Project <MdArrowOutward /></a>
                            </div>
                        </Col>
                    ))
                }
            <Col sm='12' className='text-center pt-5'>
                <button onClick={showMoreitem} className='py-3 px-4 text-white' style={{backgroundColor:"#141414",border:"1px solid #484E53"}}><i>Explore all the project</i></button>
            </Col>
        </Row>
    </Container>
    <hr></hr>
    <Container>
        <Row className='py-5'>
            <Col lg='7' >
                <div>What Do I Do And How?</div>
                <p>1 love to craft functional solutions for unique probems. These are some skills I've picked up over my career.</p>
            </Col>
        </Row>
        <Row className='gy-3'>
            {
                tech.map((technology)=>{
                    const IconComponent = IconMap[technology.icon.replace('<', '').replace(' />', '')];
                    return(
                        <Col lg='4' md='6' key={technology.id}>
                            <div className='block-item p-4'>
                                <div className='icon mb-4'><IconComponent /></div>
                                <h3 className='title mb-3'>{technology.title}</h3>
                                <p className='descrip'>{technology.description}</p>
                            </div>
                        </Col>
                    );
                })
            }
        </Row>
    </Container>    
    </>
  )
}

export default About
