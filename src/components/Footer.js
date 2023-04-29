import React from 'react'
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs';
import { motion as m } from 'framer-motion'
import { sectionAnimate, sectionFade } from '../animation'

const Footer = () => {
  return (
    <footer className='py-5 text-center'>
      <m.div
       initial={"offscreen"}
       whileInView={"onscreen"}
       viewport={{ once: false, amount: 0.5 }}
       transition={{ staggerChildren: 0.5 }}>
        <m.h3 variants={sectionAnimate}>Find us: </m.h3>
        <m.div className="icons d-flex justify-content-center align-items-center gap-4 fs-1 mb-2 mt-4" variants={sectionFade}>
          <button className='btn'>
            <a href="#" className='fs-1 '>
            <i><BsYoutube/></i>
            </a>
          </button>
          <button className='btn'>
            <a href="#" className='fs-1 '>
             <i><BsFacebook/></i>
            </a>
          </button>
          <button className='btn'>
            <a href="#" className='fs-1 '>
             <i><BsTwitter/></i>
            </a>
          </button>
         
        </m.div>
      </m.div>
    </footer>
  )
}

export default Footer
