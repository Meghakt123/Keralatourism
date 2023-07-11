import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import './Mynavbar.css';

function Mynavbar() {
  return (
    <Navbar className='one' id=''>
        <Container>
          <img src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017" className='emblem'/>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          
          <Nav className="text" id='two'>
            <Nav.Link><a href="#action1">EXPERIENCE KERALA</a></Nav.Link>
            <Nav.Link><a href="#action2">WHERE TO GO</a></Nav.Link>
            <Nav.Link><a href="#action3">WHERE TO STAY</a></Nav.Link>
            <Nav.Link><a href="#action4">THINGS TO DO</a></Nav.Link>
            <Nav.Link><a href="#action5">PLAN YOUR TRIP</a></Nav.Link>
            <Nav.Link><a href="#action6">TRAVEL CARE</a></Nav.Link>
            <Nav.Link><a href="#action7">E BROCHURES</a></Nav.Link>
            <Nav.Link><a href="#action8">E NEWSLETTERS</a></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Mynavbar