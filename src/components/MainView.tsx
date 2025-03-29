import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { Navbarr } from './NavBar';
import { Background } from './Background';
import { Service } from './Service';
import {Testinomials} from './Testinomials'
import { AboutUs } from './AboutUs';
import {GetEstimate} from "./GetEstimate"


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
      <h3 id="service" style={{fontSize:"60px", textAlign:"center", margin:"30px 0px 30px 0px"}}> Our Services</h3>
      <Service/>
      <h3 style={{fontSize:"60px", textAlign:"center", margin:"30px 0px 10px 0px"}}> World class Customer Service.</h3>
      <p style={{fontSize:"20px", textAlign:"center", margin:"5px 0px 30px 0px"}}> Don't just take our word for it, see what our customers are saying.</p>
      <Testinomials />
      <h3 style={{fontSize:"60px", textAlign:"center", margin:"30px 0px 30px 0px"}}> About us</h3>
      <AboutUs/>
      <GetEstimate />
      </>
    
    
}