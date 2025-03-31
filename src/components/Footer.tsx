import React from "react"
import { Col, Container, Row, Image } from "react-bootstrap"

export const Footer=()=>{
    const year=new Date().getFullYear()
    return(
        
        <div style={{marginTop:"100px", background:"#2879ad", color:"white"}}>
        <Row style={{paddingTop:"40px"}}>
      
          <Col className=  "d-flex justify-content-center mb-4"  sm={12} md={4} lg={4}  > <Image  src="logo.png" width="100" height={100}/></Col>
          <Col  className="mb-4" sm={12}  md={4} lg={4}>
           <div className="d-flex row mb-4" style={{textAlign:"center"}}>
            <h3><b> Quick Links </b></h3>
            <a style={{
    textDecoration: "none", color:"white"
  }} href="#">Home</a>
            <a style={{
    textDecoration: "none", color:"white"
  }} href="#service">Services</a>
            <a style={{
    textDecoration: "none", color:"white"
  }} href="#testinomials">Testimonials</a>
            <a style={{
    textDecoration: "none", color:"white"
  }} href="#about">About Us</a>
           </div>
          
          </Col>
          <Col className="mb-4" sm={12}  md={4} lg={4}> 
          
          <div className="d-flex row mb-4" style={{textAlign:"center"}}>
            <h3><b>  Contact US </b></h3>
            <a style={{
    textDecoration: "none", color:"white"
  }} href=""> 414 4154546</a>
            <a style={{
    textDecoration: "none", color:"white"
  }} href="">mindcleaning25@gmail.com</a>
            <a style={{
    textDecoration: "none", color:"white"
  }} href="">Milwaukee, WI 53209</a>
           </div>
          
          
          
          </Col>
        </Row>
        <hr></hr>
        <p style={{textAlign:"center"}}>Copyright &copy; {year}</p> 
       
      </div>
      
     
    )
}