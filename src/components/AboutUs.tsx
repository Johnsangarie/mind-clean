import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

export const AboutUs=()=>{
    return(
        <div  style={{marginBottom:"60px"}}>
             <Container>
      <Row>
        <Col sm="12" md="6"  className="d-flex justify-content-center mb-4">
        
        <Image className="shadow-sm"
        src="manno.PNG" 
        style={{ width: '400px', height: '400px', borderRadius: '50%' , }} 
        fluid 
      />
      
      </Col>
        <Col sm="12" md="6"><p> At Mind Cleaning, founded by <b> Maano Mohamed </b>, we are passionate about providing eco-friendly and reliable cleaning services to homes and businesses in Milwaukee, Wisconsin. <b> <br/> Our mission </b> includes top-notch cleaning, and we believe in positively impacting our community and the environment.<br/>

We are <b> committed </b> to developing a loyal customer base, creating job opportunities locally, and making an environmentally positive contribution. Maano, the driving force behind Mind Cleaning, is motivated to give back to the community. As the oldest of 11 children, Maano learned the importance of hard work and dedication—the same values now <b> core </b> to Mind Cleaning. At Mind Cleaning, we believe in the power of community and the difference we can make together.

Join us as we work towards a cleaner, greener Milwaukee. Your satisfaction and improving our environment are at the core of everything we do at Mind Cleaning. We’re excited to work hard, grow our reach, and achieve success with you.</p></Col>
      </Row>
      </Container>
           
          
        </div>
    )
}