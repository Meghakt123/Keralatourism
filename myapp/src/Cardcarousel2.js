import React from 'react'
import { Button, Card, CardImg, Col, Container, Row, } from 'react-bootstrap'
import './Cardcarousel2.css';
import {FaGreaterThan} from "react-icons/fa";

function Cardcarousel2() {
    const items=[{image:"https://www.keralatourism.org/images/homecontentimage/desktop/ramakalmedu-1.jpg",name:"Ramakalmedu"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/peppara-1.jpg",name:"Peppara wildlife sanctuary"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/kizhunna_beach.jpg",name:"Kizhunna beach"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/madhur-1.jpg",name:"Madhur temple"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/VALAPATTANAM-3.jpg",name:"Valapattanam"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/banasura-2.jpg",name:"Banasura sagar dam"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/bekal-fort-22.jpg",name:"Bekal fort"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/vembanadu-lake-3.jpg",name:"Vembanad lake"}
  ]
    console.log(items)
  return (
    <div className='head2'>
        <Container>
       
       <h2 >Top Destinations </h2>
       <div className='right'>
        <Row>
            {items.map((i)=>
            {
            return(
              <Col lg={3} md={6}>
            <Card className='first'>
        <CardImg src={i.image} className='images' />
        <Card.Title className='place'>{i.name}</Card.Title>
        </Card>

        

            
             </Col>
            )})}
    </Row>
    <Button className='button'>FIND MORE EXPERIENCES<FaGreaterThan/></Button>
   
    </div>
    </Container>
    </div>
  
  )
}

export default Cardcarousel2