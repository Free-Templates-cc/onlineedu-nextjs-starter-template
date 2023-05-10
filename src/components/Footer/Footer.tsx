import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FooterLinks from './FooterLinks'
import FooterSocial from './FooterSocial'
import FooterNewsLetter from './FooterNewsLetter'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
          <div className="footer-area footer-bg">
            <div className="container">
              <div className="footer-top footer-padding">
                <div className="footer-heading">
                  <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                      <FooterNewsLetter />
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <FooterSocial />
                    </div>
                  </div>
                </div>

                <FooterLinks />

              </div>

              <div className="footer-bottom">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-12">
                    <div className="footer-copy-right text-center">
                      <p>
                        Copyright &copy; 2023 All rights reserved | This
                        template is made with
                        <FontAwesomeIcon icon={faHeart} />
                        by{" "}
                        <a href="https://colorlib.com" target="_blank">
                          Colorlib
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer