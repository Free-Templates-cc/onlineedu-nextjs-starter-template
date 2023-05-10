import { faFacebookF, faGoogle, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const FooterSocial = (props: Props) => {
  return (
    <>
      <div className="footer-tittle2">
        <h4>Let’s Get Social</h4>
      </div>

      <div className="footer-social">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </>
  );
};

export default FooterSocial;
