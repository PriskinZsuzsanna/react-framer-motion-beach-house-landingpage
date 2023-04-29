import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Hero1 from '../assets/hero-1.jpg'
import Hero2 from '../assets/hero-2.jpg'
import {motion as m} from 'framer-motion'
import {explainText, typingContainer, typingText, buttonAnimation, imgA1, imgA2 } from '../animation'

import './Home.css'

const Home = () => {


  return (
    <section className={"hero d-flex align-items-center px-2"} id='home'>
      <Container className='hero-container'>
        <Row className='gap-3'>
          <Col xs={12} md={5} className='d-flex flex-column justify-content-center text-center md-text-start'>
            <div className="text">
              <m.h1 className='fs-1 text pt-5 pb-3' variants={typingContainer} initial="hidden" animate="show" >
                {

                Array.from("Beach Holiday Inn").map((word, idx) => (
                  <m.span key={idx} variants={typingText}>{word}</m.span>
                ))

                }
              </m.h1>
              <m.p variants={explainText} initial="hidden" animate="show" className='pb-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at molestiae, sint nisi recusandae, laboriosam vitae illum consequatur odio aspernatur beatae omnis ipsam officiis, libero exercitationem ipsa numquam aut? Cupiditate, ab consequuntur sit eos tempora minus animi, enim dicta nisi quae et voluptatem sint repellendus ea accusantium corrupti inventore odit eum. Nihil molestias perferendis laborum, eos cum libero neque quis.

              </m.p>
              <m.button className='btn btn-dark mb-3' variants={buttonAnimation} initial="hidden" animate="show" ><a href="#contact">Book now</a></m.button>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="img-container d-flex justify-content-center">
              <m.img src={Hero1} alt={Hero1} className='img-1'  variants={imgA1} initial="hidden" animate="show" />
              <m.img src={Hero2} alt={Hero2} className='img-2'  variants={imgA2} initial="hidden" animate="show"/>
            </div>
          </Col>
        </Row>
      </Container>


  </section>
  )
}

export default Home
