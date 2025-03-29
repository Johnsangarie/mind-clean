import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

interface Testimonial {
  message: string;
  author: string;
}


export const TestimonialCarousel = (props:   TestimonialCarouselProps ) => {
   const { testimonials } = props;
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex: number) => {
     setIndex(selectedIndex);
   };
 
   
  return (
  
  <Carousel interval={5000} activeIndex={index} onSelect={handleSelect} style={{backgroundColor:"#2879ad"}}>
    {testimonials.map((testimonial, idx) => (

      <Carousel.Item key={idx}>

        <div className="d-flex flex-column justify-content-center align-items-center p-5 text-center">
          <p className="fs-5 fst-italic">"{testimonial.message}"</p>
          <p className="fw-bold mt-3">— {testimonial.author}</p>
        </div>
      </Carousel.Item>
       
    ))}
  </Carousel>
)

}

