import React from 'react';
import { TestimonialCarousel } from './TestimonialCarousel';
import { testimonialsData } from '../data';



export function Testinomials() {
  return (
    <div  className="container py-5">
      <TestimonialCarousel testimonials={testimonialsData} />
    </div>
  );
}

