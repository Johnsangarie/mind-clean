import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { Navbarr } from './NavBar';
import { Background } from './Background';
export function  MainView()  {
       return   <> 
       
     <div style={{ backgroundColor: '#2879ad', color: '#fff', fontSize: '0.9rem' }}>
       <Container fluid="lg">
         <Row className="py-2 text-center text-md-start">
           <Col md={4} className="mb-2 mb-md-0">
             <FaMapMarkerAlt className="me-2" />
             Milwaukee, WI
           </Col>
           <Col md={4} className="mb-2 mb-md-0">
             <FaPhoneAlt className="me-2" />
             414 4154546
           </Col>
           <Col md={4}>
             <FaRegClock className="me-2" />
             Mon-Fri 8am-5pm, Sat-Sun 10am-2pm
           </Col>
         </Row>
       </Container>
      
     </div>
      <Navbarr/>
      <Background/>
      </>
    
    
}