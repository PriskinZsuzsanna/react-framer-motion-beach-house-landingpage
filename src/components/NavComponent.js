import React, {useState, useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container'
import { motion as m } from 'framer-motion'
import { navAnimation, navItem } from '../animation'



const NavComponent = () => {

    const [scroll, setScroll] = useState(false);
   
    const homeRef = useRef()

    useEffect(() => {
       window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 50);
       });
     }, []);


    return (
        <header className={scroll? 'scroll' : 'bg-secondary bg-opacity-10'}>

            <Container>
                <nav className='py-4'>
                    <m.ul variants={navAnimation} initial="hidden" animate="show" className='w-100 d-flex justify-content-evenly fw-bold h5'>
                        <m.li variants={navItem}><a className='homeKlik' ref={homeRef} href='#' >Home</a></m.li>
                        <m.li variants={navItem}><a className='aboutKlik' href='#about'>About</a></m.li>
                        <m.li variants={navItem}><a className='exploreKlik' href='#explore'>Explore</a></m.li>
                        <m.li variants={navItem}><a className='contactKlik' href='#contact'>Contact</a></m.li>
                    </m.ul >
                </nav>
            </Container>
        </header>
    )
}

export default NavComponent
