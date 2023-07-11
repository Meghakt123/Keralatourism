import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import './Cardcarousel6.css';
import {FaGreaterThan} from "react-icons/fa";

function Cardcarousel6() {
    
    const items=[{image:"https://www.keralatourism.org/images/homecontentimage/entire-kerala.jpg",name:"Entire kerala",details:"A journey through god's own country",price:"INR 2000 to 118,000"},
    {image:"https://www.keralatourism.org/images/homecontentimage/central-kerala.jpg",name:"Central kerala",details:"Trip to the soul of kerala",price:"INR 1000 to 116,000"},
    {image:"https://www.keralatourism.org/images/homecontentimage/backwater.jpg",name:"Backwater",details:"Through the stretches of emerald",price:"INR 1000 to 16,000"},
    {image:"https://www.keralatourism.org/images/homecontentimage/south-kerala.jpg",name:"South kerla",details:"A journey to remember",price:"INR 1000 to 175,000"},
    {image:"https://www.keralatourism.org/images/homecontentimage/hill-station.jpg",name:"Hill station",details:"Explore the lush mist-clad hill stations",price:"INR 2000 to 46,000"},
    {image:"https://www.keralatourism.org/images/homecontentimage/honeymoon.jpg",name:"Honeymoon",details:"Celebrate your romance",price:"INR 2000 to 150,000"},
  ]
    console.log(items)
  return (
    <div className='head7'>
       <Container>
       <h2 className='t1' >Tour Packages</h2>
       <span><p className='t2'>STOP. Breathe. Slow down. Embrace life. It’s time for Kerala! </p></span>
       <p className='t3'>Plan your trip with amazing offers and packages. </p>
        <Row lg={3} md={6}>
            {items.map((i)=>
            {
            return(
              <Col>
           <Card className='hy'>
        <a href=""><CardImg src={i.image} className='im' /></a>
        <Card.Title className='ps'>{i.name}</Card.Title>
        <span><Card.Title className='ps2'>{i.details}</Card.Title></span>  
        <span><Card.Title className='ps3'>{i.price}</Card.Title></span> 
        
        </Card>

        

            
             </Col>
            )})}
    </Row>
    <Button className='but2'>FIND MORE PACKAGES<FaGreaterThan/></Button>
   

    </Container>
    </div>
  )
}

export default Cardcarousel6