import React from 'react'
import TeamMate from './TeamMate'

type Props = {}

const Team = (props: Props) => {
  return (
    <div
    className="team-area pt-160 pb-160 section-bg"
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
        <TeamMate image="/images/gallery/team1.png.webp" name="Alexa Janathon" />
        <TeamMate image="/images/gallery/team2.png.webp" name="Janathon Smith" />
        <TeamMate image="/images/gallery/team3.png.webp" name="Alexa MacCalum" />
        <TeamMate image="/images/gallery/team4.png.webp" name="Alexa j Watson" />
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="browse-btn2 text-center mt-70">
            <a href="https://preview.colorlib.com/theme/onlineedu/instructor.html" className="btn white-btn hover-text-white">
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