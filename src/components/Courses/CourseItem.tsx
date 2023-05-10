import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    image: string;
    title: string;
}

const CourseItem = (props: Props) => {
    const { image, title } = props;
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-course mb-40">
            <div className="course-img">
              <img src={image} alt="" />
            </div>
            <div className="course-caption">
              <div className="course-cap-top">
                <h4>
                  <a href="#">{title}</a>
                </h4>
              </div>
              <div className="course-cap-mid d-flex justify-content-between">
                <div className="course-ratting">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <ul>
                  <li>52 Review</li>
                </ul>
              </div>
              <div className="course-cap-bottom d-flex justify-content-between">
                <ul>
                  <li>
                    <i className="ti-user"></i> 562
                  </li>
                  <li>
                    <i className="ti-heart"></i> 562
                  </li>
                </ul>
                <span>Free</span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CourseItem