import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { BsHandThumbsUp, BsRecordCircle, BsShieldLock, BsTelephoneInbound, BsAward, BsDropletHalf } from 'react-icons/bs';



const ourProcess = [
    {
      title: "Super Reliable",
      desc: "No more second-guessing if your space was cleaned the night before. You'll always be able to see & feel the difference after each clean.",
      icon: "BsHandThumbsUp"
    },
    {
      title: "Very Consistent",
      desc: "The key to maintaining a clean office is consistency. We set that expectation from the beginning of every relationship & deliver on that promise through systemized Quality Control Checks.",
      icon: "BsRecordCircle"
    },
    {
      title: "Safety & Security",
      desc: "Sleep soundly, knowing your space is looked after & secured each night. We will never subcontract the cleaning of your space. All cleaners are employees, background checked, & in uniform, so you can easily identify our crew.",
      icon: "BsShieldLock"
    },
    {
      title: "Reach Us When You Need Us",
      desc: "Have a special request or concern? Whatever your preferred means of communication, we're always accessible to care for your needs with friendly & attentive Customer Service. We're just a quick email, phone call, or text away.",
      icon: "BsTelephoneInbound"
    },
    {
      title: "Responsible",
      desc: "Your space is cleaned thoroughly nightly, and our liability, surety bond, & Worker's Compensation Insurance ensure you're covered from unforeseen events. Upon signing a Service Agreement, all clients receive a Certificate of Insurance to confirm coverage.",
      icon: "BsAward"
    },
    {
      title: "Daily Disinfecting Practices",
      desc: "Your space will be properly disinfected each clean. Our trained professionals are well-versed & well educated on the best solutions & practices to ensure we're eliminating germs from all your high-touch areas.",
      icon: "BsDropletHalf"
    }
  ]

 
const icons = {
  BsHandThumbsUp: <BsHandThumbsUp size={32} />,
  BsRecordCircle: <BsRecordCircle size={32} />,
  BsShieldLock: <BsShieldLock size={32} />,
  BsTelephoneInbound: <BsTelephoneInbound size={32} />,
  BsAward: <BsAward size={32} />,
  BsDropletHalf: <BsDropletHalf size={32} />,
};
export const WorkingWithUs=()=>{
    return  <Container>
    <Row>

    {ourProcess.map((process, index) => (
      <Col md={4} sm={6} xs={12} key={index} className="mb-4" style={{"textAlign":"center"}}>
      
      <div className="mb-3"  style={{color:"green"}}>{icons[process.icon]}</div>
      <h5><strong>{process.title}</strong></h5>
     
            <p>{process.desc}</p>
          
      
      </Col>
    ))}
   
    </Row>

    
  </Container>
}