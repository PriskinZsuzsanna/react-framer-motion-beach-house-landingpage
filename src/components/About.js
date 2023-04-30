import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import About1 from '../assets/about1.jpg'
import About2 from '../assets/about2.jpg'
import About3 from '../assets/about3.jpg'
import CardItem from './CardItem'
import { motion as m } from 'framer-motion'
import { sectionAnimate } from '../animation'


import './About.css'

const About = () => {

  return (
    <section className={"about d-flex align-items-center px-2 "} id='about'>

      <Container className="about-container">
        <m.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0 }}
          transition={{ staggerChildren: 0.5 }}>
          <m.h2 className='text-center pb-4' variants={sectionAnimate}>About our Inn</m.h2>
          <m.p variants={sectionAnimate}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero similique, inventore explicabo, officia
            maiores cum voluptatum maxime nesciunt tempore, incidunt suscipit est dolor aut odit asperiores veritatis beatae in nam vitae dolore blanditiis perferendis dolores?
            Non nobis temporibus reiciendis excepturi sed tenetur, unde quos suscipit. Quam, nam dicta! Odit iste neque aliquam iure, explicabo labore, expedita dolores repellendus pariatur quibusdam et eligendi
            fuga maiores? Quibusdam labore reprehenderit consequuntur, maxime repudiandae possimus in necessitatibus quod, sint iure vel delectus, illo quae? Impedit mollitia eveniet vel, esse aperiam aliquid aliq
            uam accusantium distinctio blanditiis unde cum voluptatibus saepe velit earum ullam tempora.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero similique, inventore explicabo, officia
            maiores cum voluptatum maxime nesciunt tempore, incidunt suscipit est dolor aut odit asperiores veritatis beatae in nam vitae dolore blanditiis perferendis dolores?
            Non nobis temporibus reiciendis excepturi sed tenetur, unde quos suscipit.
          </m.p>


          <Row className='py-3' >
            <Col xs={12} md={4} className='d-flex justify-content-center mb-3'>

              <CardItem
                key={1}
                img={About1}
                title={"Spaces rooms"}
                text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                buttonText={"Read more"}
              />
            </Col>

            <Col xs={12} md={4} className='d-flex justify-content-cente mb-3'>
              <CardItem
                key={2}
                img={About2}
                title={"Splendid building"}
                text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                buttonText={"Read more"}
              />
            </Col>

            <Col xs={12} md={4} className='d-flex justify-content-center mb-3'>
              <CardItem
                key={3}
                img={About3}
                title={"Comfortable areas"}
                text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                buttonText={"Read more"}
              />
            </Col>
          </Row>

        </m.div>
      </Container>
    </section>
  )
}

export default About
