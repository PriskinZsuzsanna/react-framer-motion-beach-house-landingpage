import Container from 'react-bootstrap/Container'
import CarouselComponent from './CarouselComponent'
import { motion as m } from 'framer-motion'
import { sectionAnimate, sectionFade } from '../animation'

const Explore = () => {


  return (
    <section className={"explore d-flex align-items-center px-2 "} id='explore'>
      <Container>
        <m.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}>
          <m.h2 className='text-center pb-4' variants={sectionAnimate}>Explore the Area</m.h2>
          <m.div
           initial={"offscreen"}
           whileInView={"onscreen"}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ staggerChildren: 0.5 }}>
            <m.div variants={sectionFade}>
              <CarouselComponent />
            </m.div>
          </m.div>
        </m.div>
      </Container>
    </section>
  )
}

export default Explore
