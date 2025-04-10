import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

  const steps = [
    {
      number: '1',
      title: 'Contact Us',
      desc: "Give us a call or Click ‘Get an Estimate’ so we can see how we can best help your cleaning needs."
    },
    {
      number: '2',
      title: 'Schedule a Walkthrough',
      desc: 'Schedule a 30-minute in-person walkthrough.'
    },
    {
      number: '3',
      title: 'Review Proposal',
      desc: 'Proposal turnaround is quick and thorough, so you can keep operations moving and make the best cleaning decision for your space.'
    },
    {
      number: '4',
      title: 'Relax!',
      desc: 'Easy onboarding and invoicing practices are mindful of your time and busy schedule. Relax, and leave it to us.'
    }
  ];


export const StepsToWork=()=>{
    
    return  <Container className="text-center my-5">
        
          <Row className="justify-content-center">
            {steps.map((step, idx) => (
              <Col key={idx} md={3} sm={6} className="mb-4">
                <Card className="border-0">
                  <Card.Body>
                    <div
                      className="rounded-circle  text-white d-inline-flex justify-content-center align-items-center mb-3"
                      style={{ width: '60px', height: '60px', fontSize: '1.5rem', margin: 'auto', backgroundColor: '#2879ad' }}
                    >
                      {step.number}
                    </div>
                    <Card.Title className="fw-semibold">{step.title}</Card.Title>
                    <Card.Text>{step.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      
}