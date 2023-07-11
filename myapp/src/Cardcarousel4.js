import React from 'react'
import './Cardcarousel4.css';
import { Button } from 'react-bootstrap';
import {FaGreaterThan} from "react-icons/fa";


function Cardcarousel4() {
  return (
    <div>

        <h3 className='head5'>What's New</h3>
        <a href="" className='p1'>Domestic trade fairs 2023-2024|Register Now</a><span><a href="" className='p2'>International trade fair|May 2023</a></span>
        <Button className='button2'> MORE NEWS  <FaGreaterThan/></Button>
    </div>
  )
}

export default Cardcarousel4