import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../assets/explore1.jpg'
import Slide2 from '../assets/explore2.jpg'
import Slide3 from '../assets/explore3.jpg'
import './CarouselComponent.css'
import {motion as m} from 'framer-motion'
import {sectionAnimate } from '../animation'

const CarouselComponent = () => {
  return (
    
    <Carousel fade>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Slide1}
          alt="First slide"
        />
        <Carousel.Caption className='bg-secondary text-light bg-opacity-75 rounded-4 carousel-caption'>
          <h3>Enjoy the Beach</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Second slide"
        />

        <Carousel.Caption className='bg-dark text-light bg-opacity-25 rounded-4'>
          <h3>Try extreme sports</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Third slide"
        />

        <Carousel.Caption className='bg-light bg-opacity-50 rounded-4'>
          <h3>Explore Nightlife</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
  )
}

export default CarouselComponent
