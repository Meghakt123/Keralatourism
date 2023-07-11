import React from 'react'
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap'
import './Cardcarousel9.css';
import {FaGreaterThan} from "react-icons/fa";

function Cardcarousel9() {

  const items=[{image:"https://www.keralatourism.org/images/homecontentimage/desktop/beach.jpg ",name:"Beaches"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg  ",name:"Kerala Panorama"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/img-3.jpg ",name:"Pilgrim Centre"},
    {image:" https://www.keralatourism.org/images/homecontentimage/desktop/img-4.jpg",name:"Artform"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/festivals.jpg ",name:"Festivals"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/places-of-interest1.jpg ",name:"Places of Interest"},
    {image:" https://www.keralatourism.org/images/homecontentimage/desktop/waterfall.jpg",name:"Waterfalls"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/monuments.jpg ",name:"Monuments"},
    {image:"https://www.keralatourism.org/images/homecontentimage/desktop/wild-life-2.jpg ",name:"Wildlife "},
    {image:" https://www.keralatourism.org/images/homecontentimage/desktop/img-10.jpg",name:"Hills "},
    {image:" https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda.jpg",name:"Ayurveda "},
    {image:" https://www.keralatourism.org/images/homecontentimage/desktop/img-12.jpg",name:" Backwaters"},

]
    console.log(items)
  return (
    <div >
        {/* <Container> */}
       
       <h2 className='heados'>Explore Photo Gallery </h2>
       <div className='item'>
        <Row>
            {items.map((i)=>
            {
            return(
                
              <Col lg={2} >
            <Card className='prime'>
        <CardImg src={i.image} className='photos' />
        <Card.Title className='gallery'>{i.name}</Card.Title>
        </Card>

        

            
             </Col>
            )})}
    </Row>
    <Button className='but3'>Browse Our Gallery<FaGreaterThan/></Button>
   
    </div>
    </div>
  )
}

export default Cardcarousel9