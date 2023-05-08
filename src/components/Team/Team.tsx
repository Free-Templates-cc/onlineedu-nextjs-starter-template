import React from 'react'

type Props = {}

const Team = (props: Props) => {
  return (
    <div
    className="team-area pt-160 pb-160 section-bg"
    data-background="/images/gallery/section_bg02.png.webp"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="cl-xl-7 col-lg-8 col-md-10">
          <div className="section-tittle section-tittle2 text-center mb-70">
            <span>More About Our Faculty</span>
            <h2>Our Best Teachers</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-team mb-30">
            <div className="team-img">
              <img src="/images/gallery/team1.png.webp" alt="" />

              <ul className="team-social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-globe"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-caption">
              <h3>
                <a href="instructor.html">Alexa Janathon</a>
              </h3>
              <p>Faculty</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-team mb-30">
            <div className="team-img">
              <img src="/images/gallery/team2.png.webp" alt="" />

              <ul className="team-social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-globe"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-caption">
              <h3>
                <a href="instructor.html">Janathon Smith</a>
              </h3>
              <p>Faculty</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-team mb-30">
            <div className="team-img">
              <img src="/images/gallery/team3.png.webp" alt="" />

              <ul className="team-social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-globe"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-caption">
              <h3>
                <a href="instructor.html">Alexa MacCalum</a>
              </h3>
              <p>Faculty</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-team mb-30">
            <div className="team-img">
              <img src="/images/gallery/team4.png.webp" alt="" />

              <ul className="team-social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-globe"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-caption">
              <h3>
                <a href="instructor.html">Alexa j Watson</a>
              </h3>
              <p>Faculty</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="browse-btn2 text-center mt-70">
            <a href="instructor.html" className="btn white-btn">
              View All Faculty
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Team