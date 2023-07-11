import React from 'react'
import './Cardcarousel8.css';
import { Button, Form } from 'react-bootstrap';

function Cardcarousel8() {
  return (
    <div className='hello'>
            <Form className="d-flex">
            <label>Search For Accomadation</label>

            <Form.Control
              type="search"
              placeholder="Enter Keyword"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" id='colors'>Search</Button>
    
    </Form> 
    </div>
  )
}

export default Cardcarousel8