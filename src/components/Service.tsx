import React from "react"

import { Card, Col, Container, Row } from "react-bootstrap"
import { services } from "../data"
export const Service=()=>{
   
    
    return (
        <Container>
        <Row>

        {services.map((service, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="h-100 text-center shadow-sm">
        <Card.Img variant="top" src={`${service.Img}`}  />
              <Card.Body>
                <Card.Title className="mt-3">{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
       
        </Row>

        
      </Container>
    )
}