import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const TestimonialItem = (props: Props) => {
  return (
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
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                  
                </div>
                <div className="rattiong-caption">
                  <span>
                    Clifford Frazier<span> - Colorlib Themes</span>{" "}
                  </span>
                </div>
              </div>
            </div>
  )
}

export default TestimonialItem