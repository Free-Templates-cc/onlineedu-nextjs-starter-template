import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="about-area section-padding2">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="about-caption mb-50">
                    <div className="section-tittle mb-35">
                      <span>More About Our Company</span>
                      <h2>Want to know more</h2>
                    </div>
                    <p>
                      There arge many variations ohf passages of sorem gpsum
                      ilable, but the majority have suffered alteration in some
                      form, by ected humour, or randomised words whi.
                    </p>
                    <ul>
                      <li>
                        <span className="flaticon-business"></span> Creative
                        ideas base
                      </li>
                      <li>
                        <span className="flaticon-communications-1"></span>{" "}
                        Assages of sorem gpsum ilable
                      </li>
                      <li>
                        <span className="flaticon-graduated"></span> Have
                        suffered alteration in so
                      </li>
                      <li>
                        <span className="flaticon-tools-and-utensils"></span>{" "}
                        Randomised words whi
                      </li>
                    </ul>
                    <a href="about.html" className="btn">
                      More About Us
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="about-img ">
                    <div className="about-font-img d-none d-lg-block">
                      <img src="/images/gallery/about2.png.webp" alt="" />
                    </div>
                    <div className="about-back-img ">
                      <img src="/images/gallery/about1.png.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default About