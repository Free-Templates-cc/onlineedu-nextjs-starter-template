import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CourseItem from './CourseItem'

type Props = {}

const Courses = (props: Props) => {
  return (
    <div className="popular-course section-padding30">
    <div className="container">
      <div className="row justify-content-sm-center">
        <div className="cl-xl-7 col-lg-8 col-md-10">
          <div className="section-tittle text-center mb-70">
            <span>Most Popular Course Of This Week</span>
            <h2>Our Popular Course</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <CourseItem image="/images/gallery/popular_sub1.png.webp" title={`Graphic Design`} />
        <CourseItem image="/images/gallery/popular_sub2.png.webp" title={`Web Development`} />
        <CourseItem image="/images/gallery/popular_sub3.png.webp" title={`Digital Marketing`} />
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="browse-btn2 text-center mt-50">
            <a href="https://preview.colorlib.com/theme/onlineedu/courses.html" className="btn hover-text-white">
              Find More Courses
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Courses