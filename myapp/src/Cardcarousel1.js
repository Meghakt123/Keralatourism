import React from 'react'
import {Button, Card, CardImg, Carousel, Col, Container, Row } from 'react-bootstrap'
import './Cardcarousel1.css';


function Cardcarousel1() {
    const items=[{image:"https://www.keralatourism.org/images/homecontentimage/desktop/oppana.jpg",name:"OPPANA"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/wayanadu-churam.jpg",name:"WAYANAD GHATS"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda3.jpg",name:"AYURVEDA"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/valiyaparamba1.jpg",name:"VALIYAPARAMBA BACKWATERS"},
    // {image:"https://www.keralatourism.org/images/homecontentimage/desktop/akkulam.jpg"},
    
  ]
    console.log(items)
  return (
    
    <div>
      <Container>
       <h2 className='head'>Experience Kerala</h2>
        <Carousel>
        <Row>
            {items.map((i)=>
            {
            return(
              <Col>
            <Card className='cards'>
        <CardImg className='img' src={i.image} />
        <Card.Title className='ename'>{i.name}</Card.Title>

        

             </Card>
             </Col>
            )})}
    </Row>
    </Carousel>
   {/* <Button className='button'>FIND MORE EXPERIENCES</Button> */}

   </Container>
    </div>
  
  )
}

export default Cardcarousel1