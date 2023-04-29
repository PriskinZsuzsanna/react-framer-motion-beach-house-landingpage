import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { motion as m } from 'framer-motion'
import { sectionAnimate, sectionFade } from '../animation'

const Contact = () => {


  return (
    <section className={"contact d-flex align-items-center px-2 "} id='contact'>
      <Container>
        <m.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.5 }}>
          <m.h2 className='text-center pb-4' variants={sectionAnimate}>Contact Us</m.h2>

          <m.div initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ staggerChildren: 0.5 }}>

            <m.div variants={sectionFade}>
              <Form>
                <Form.Group className='py-3'>
                  <Form.Label>Név</Form.Label>
                  <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group className='py-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email'></Form.Control>
                </Form.Group>
                <Form.Group className='py-3'>
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as='textarea' className='textarea'></Form.Control>
                </Form.Group>
                <Form.Group className='py-3 w-100 text-center'>
                  <Button type='submit' className='btn btn-dark w-50'>Send</Button>
                </Form.Group>
              </Form>
            </m.div>
            
          </m.div>

        </m.div>
      </Container>
    </section>
  )
}

export default Contact
