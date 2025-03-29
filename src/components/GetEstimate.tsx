 import React, { useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
 import emailjs from '@emailjs/browser';



export const GetEstimate =()=>{
 
  const form = useRef(null)
 
  const [errorMessage, setErrorMessage] = useState("")
  




const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
    if(!form) return
    event.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,{
      publicKey:import.meta.env?.VITE_MY_PUBLIC_KEY}
    ).then(()=>{
        console.log("SUCCESS")
        setErrorMessage("")
       }, 
       (error)=>{
        setErrorMessage(error.text)
       
        console.log(error)
       })

       form.current.reset()

}

  


     
    
    return     <>
     <Container id='get-estimate' fluid="lg">
    <Row>
      <Col sm="12"  md="6" className="mb-4" style={{backgroundColor:"#2879ad"}}> <h3 style={{fontSize:"60px", textAlign:"center", margin:"30px 0px 30px 0px", color:"#fff"}}> Ready To Get an Estimate?</h3></Col>

      <Col sm="12"   md="6"  className="mb-4" > 
    <Form className='px-5' ref={form}  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
        <Form.Control type="name" name='name'  placeholder="Your Name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="city" name='city' placeholder="Your City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
        <Form.Control type="email" name='email'   placeholder="Your Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="Phone" name='phone'  placeholder="Your Phone Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="facility Type" name='facility'   placeholder="Type of Facility" />
     </Form.Group>
 
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="cleanFrequency" name='cleanFrequency'  placeholder="Cleaning Freqency (days per week)" />
     </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
     <p style={{color:"red", marginTop:"10px" , textAlign:"center"}}>{errorMessage}</p>
    </Col>
    </Row>
    </Container>
    </>
  
}

      

    
    
  

