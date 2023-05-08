import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
            showArrows={false}
            showStatus={false}
            swipeable={true}
            className="h1-testimonial-active"
            >
            <div className="single-testimonial pt-65">
              <div className="testimonial-icon mb-45">
                <img
                  src="/images/gallery/testimonial.png.webp"
                  className="ani-btn "
                  alt=""
                />
              </div>

              <div className="testimonial-caption text-center">
                <p>
                  You can’t succeed if you just do what others do and
                  follow the well-worn path. You need to create a new
                  and original path for yourself.
                </p>

                <div className="testimonial-ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="rattiong-caption">
                  <span>
                    Clifford Frazier<span> - Colorlib Themes</span>{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="single-testimonial pt-65">
              <div className="testimonial-icon mb-45">
                <img
                  src="/images/gallery/testimonial.png.webp"
                  className="ani-btn "
                  alt=""
                />
              </div>

              <div className="testimonial-caption text-center">
                <p>
                  You can’t succeed if you just do what others do and
                  follow the well-worn path. You need to create a new
                  and original path for yourself.{" "}
                </p>

                <div className="testimonial-ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="rattiong-caption">
                  <span>
                    Clifford Frazier<span> - Colorlib Themes</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            </Carousel>
       
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonials