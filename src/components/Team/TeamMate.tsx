import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

type Props = {
    image: string;
    name: string;
}

const TeamMate = (props: Props) => {

    const { 
        image,
        name
    } = props;

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-team mb-30">
            <div className="team-img">
              <img src={image} alt="" />

              <ul className="team-social">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                  <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-caption">
              <h3>
                <a href="https://preview.colorlib.com/theme/onlineedu/instructor.html">{name}</a>
              </h3>
              <p>Faculty</p>
            </div>
          </div>
        </div>
  )
}

export default TeamMate