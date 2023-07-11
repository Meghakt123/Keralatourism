import React from 'react'
import './Cardcarousel3.css';
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap';
import {FaGreaterThan} from "react-icons/fa";

function Cardcarousel3() {
    const items=[{image:"https://www.keralatourism.org/images/homecontentimage/desktop/kayakking2.jpg",name:"Kayaking"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/rock_climbing.jpg",name:"Rock climbing"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/boating.jpg",name:"Boating"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/natural_walk2.jpg",name:"Nature walk"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/surfing1.jpg",name:"surfing"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/parasailing1.jpg",name:"Parasailing"},
]
    console.log(items)

  return (
    
    <div className='containers'>
        {/* <Container> */}
    {/* <img src="https://wallpapercave.com/wp/wp3703042.jpg" className='bgimg'/> */}
    <h3 className='head4'>Things to do in kerala</h3>
    <Row>
            {items.map((i)=>
            {
            return(
              <Col lg={4} md={6}>
            <Card className='second'>
        <CardImg src={i.image} className='pics' />
        <Card.Title className='todo'>{i.name}</Card.Title>
        </Card>

        

            
             </Col>
            )})}
    </Row>
    
    <Button className='button1'>FIND MORE ACTIVITIES<FaGreaterThan/></Button>
    {/* </Container>  */}
    </div>
  )
}

export default Cardcarousel3