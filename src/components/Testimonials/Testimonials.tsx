import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TestimonialItem from './TestimonialItem';

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div
    className="testimonial-area fix pt-180 pb-180 section-bg"
    data-background="/images/gallery/section_bg03.png.webp"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-9 col-md-9">

          <Carousel 
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showArrows={true}
            showStatus={false}
            swipeable={true}
            className="h1-testimonial-active"
            >
            

            <TestimonialItem />
            <TestimonialItem />

            </Carousel>
       
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonials