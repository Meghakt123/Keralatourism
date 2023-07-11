import React from 'react'
import './Cardcarousel5.css';
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap';
import {FaGreaterThan} from "react-icons/fa";

function Cardcarousel5() {
    const items=[{image:"https://www.keralatourism.org/images/festivals/home-thumb/20181025114456_370_1.jpg",name:"Feast of holy cross shrine"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20181025114252_241_1.jpg",name:"Peppara wildlife sanctuary"},
    // {image:"https://www.keralatourism.org/images/festivals/home-thumb/20181108075932_170_1.jpg",name:"Kizhunna beach"},
    // {image:"https://www.keralatourism.org/images/festivals/home-thumb/20170710102310_123_1.jpg",name:"Madhur temple"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20171222121145_317_1.jpg",name:"Valapattanam"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20131104154213_40_1.jpg",name:"Banasura sagar dam"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20180510222310_225_1.jpg",name:"Bekal fort"},
    {image:"https://www.keralatourism.org/images/festivals/home-thumb/20181108075932_170_1.jpg",name:"Vembanad lake"}
  ]
    console.log(items)
  return (
    <div className='head6'>
       <Container>
       <h2 >What's Happening </h2>
       <div className='left'>
        <Row lg={6} md={6}>
            {items.map((i)=>
            {
            return(
              <Col >
            <Card className='fifth'>
        <CardImg src={i.image} className='picto' />
        <Card.Title className='pack'>{i.name}</Card.Title>
        </Card>

        

            
             </Col>
            )})}
    </Row>
    <Button className='bu'>MORE FESTIVALS & EVENTS   <FaGreaterThan/></Button>
   
    </div>
    </Container>
    </div>
  )
}

export default Cardcarousel5