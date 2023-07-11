import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Mycarousel.css';

function Mycarousel() {
    const item=[{image:"https://www.keralatourism.org/images/banner/desktop/nelliyampathy-1920x650.jpg"},
    {image:"https://www.keralatourism.org/images/banner/desktop/riverreafting-1920x650.jpg"},
    {image:"https://www.keralatourism.org/images/banner/desktop/kumarakom-1920x6502.jpg"},
    {image:"https://www.keralatourism.org/images/banner/desktop/painting-1920x650.jpg"}]
    console.log(item)
  return (
    
    <div>
        <Carousel>
            {item.map((i)=>
         {
         return(
      <Carousel.Item className='img'>
        <img className="d-block w-60 h-60"
          src={i.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{i.name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
            )})}
    </Carousel>
   
    </div>
  )
}

export default Mycarousel