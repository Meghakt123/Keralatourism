import React from 'react'
import './Cardcarousel7.css';
import { Card, CardImg, Col, Container, Row } from 'react-bootstrap';

function Cardcarousel7() {
    const items=[{image:"https://www.keralatourism.org/images/kt/tr-icon-hotel.png",name:"Where to Stay"},
    {image:"https://www.keralatourism.org/images/kt/tr-icon-brochure.png",name:"Brochures "},
    {image:"https://www.keralatourism.org/images/kt/tr-icon-visa.png",name:"Visa on Arrival"},
    {image:"https://www.keralatourism.org/images/yatri-logo.png",name:"Yatri Nivas"},
    {image:"https://www.keralatourism.org/images/kt/tr-icon-messageboard.png",name:"Travel Care"},
    {image:"https://www.keralatourism.org/images/kt/tr-icon-toilets.png",name:"Toilets"},
    {image:"https://www.keralatourism.org/images/kt/tr-icon-newsletter.png",name:" Newsletters"},

]
    console.log(items)
  return (
    <div className='trio'>
       <Container>
       <h2 className='to' >Plan Your Trip</h2>
       <div className='a1'></div>
       
        <Row lg={8} >
            {items.map((i)=>
            {
            return(
              <Col className='text-center'>
                
            <div className='hyp'>
       <a href=""><img src={i.image} className='imgo'/> </a>
       </div>
        <a href="#"className='lol'>{i.name}</a>
      
             </Col>
            )})}
    </Row>

    </Container>
    

            
    </div>
  )
}

export default Cardcarousel7