import React from 'react'

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
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-course mb-40">
            <div className="course-img">
              <img src="/images/gallery/popular_sub1.png.webp" alt="" />
            </div>
            <div className="course-caption">
              <div className="course-cap-top">
                <h4>
                  <a href="#">Graphic Design</a>
                </h4>
              </div>
              <div className="course-cap-mid d-flex justify-content-between">
                <div className="course-ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
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
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-course mb-40">
            <div className="course-img">
              <img src="/images/gallery/popular_sub2.png.webp" alt="" />
            </div>
            <div className="course-caption">
              <div className="course-cap-top">
                <h4>
                  <a href="#">Web Development</a>
                </h4>
              </div>
              <div className="course-cap-mid d-flex justify-content-between">
                <div className="course-ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
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
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-course mb-40">
            <div className="course-img">
              <img src="/images/gallery/popular_sub3.png.webp" alt="" />
            </div>
            <div className="course-caption">
              <div className="course-cap-top">
                <h4>
                  <a href="#">Digital Marketing</a>
                </h4>
              </div>
              <div className="course-cap-mid d-flex justify-content-between">
                <div className="course-ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
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
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="browse-btn2 text-center mt-50">
            <a href="courses.html" className="btn">
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