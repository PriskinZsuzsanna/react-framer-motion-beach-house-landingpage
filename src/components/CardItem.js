import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { motion as m } from 'framer-motion'
import { sectionFade } from '../animation'

const CardItem = ({ img, title, text, buttonText }) => {
    return (
        <m.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.3}}
        transition={{ staggerChildren: 0.5 }}>
            <m.div variants={sectionFade} className='h-100'>
                <Card className='text-center h-100'>
                    <Card.Img variant="top" src={img} className='rounded h-100' alt="inn-pic-1" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>

                        <Button variant="dark">{buttonText}</Button>

                    </Card.Body>
                </Card>

            </m.div>
        </m.div>

    )
}

export default CardItem
