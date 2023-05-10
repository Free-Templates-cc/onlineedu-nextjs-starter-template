import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SliderItem from './SliderItem';

type Props = {}

const Slider = (props: Props) => {
  return (
    <div className="slider-area ">

            <Carousel 
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            swipeable={true}
            className="slider-active"
            >
              <SliderItem />
              <SliderItem />

              </Carousel>
         
          </div>
  )
}

export default Slider