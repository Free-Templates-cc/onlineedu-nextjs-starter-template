import React from 'react'

type Props = {}

const Slider = (props: Props) => {
  return (
    <div className="slider-area ">
            <div className="slider-active">
              <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                      <div className="hero__caption">
                        <span data-animation="fadeInLeft" data-delay=".2s">
                          Popular Online Courses
                        </span>
                        <h1 data-animation="fadeInLeft" data-delay=".4s">
                          The New Way To Learn Properly in With Us!
                        </h1>

                        <div className="hero__btn">
                          <a
                            href="industries.html"
                            className="btn hero-btn"
                            data-animation="fadeInLeft"
                            data-delay=".8s"
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                      <div
                        className="hero-man d-none d-lg-block f-right"
                        data-animation="jello"
                        data-delay=".4s"
                      >
                        <img src="/images/hero/heroman.png.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                      <div className="hero__caption">
                        <span data-animation="fadeInLeft" data-delay=".2s">
                          Popular Online Courses
                        </span>
                        <h1 data-animation="fadeInLeft" data-delay=".4s">
                          The New Way To Learn Properly in With Us!
                        </h1>

                        <div className="hero__btn">
                          <a
                            href="industries.html"
                            className="btn hero-btn"
                            data-animation="fadeInLeft"
                            data-delay=".8s"
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                      <div
                        className="hero-man d-none d-lg-block f-right"
                        data-animation="jello"
                        data-delay=".4s"
                      >
                        <img src="/images/hero/heroman.png.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Slider