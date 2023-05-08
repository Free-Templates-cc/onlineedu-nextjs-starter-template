import React from 'react'

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
                      <div className="footer-tittle2">
                        <h4>Stay Updated</h4>
                      </div>

                      <div className="footer-form mb-50">
                        <div id="mc_embed_signup">
                          <form
                            target="_blank"
                            action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                            method="get"
                            className="subscribe_form relative mail_part"
                            noValidate={true}
                          >
                            <input
                              type="email"
                              name="EMAIL"
                              id="newsletter-form-email"
                              placeholder=" Email Address "
                              className="placeholder hide-on-focus"
                            />
                            <div className="form-icon">
                              <button
                                type="submit"
                                name="submit"
                                id="newsletter-submit"
                                className="email_icon newsletter-submit button-contactForm"
                              >
                                Subscribe Now
                              </button>
                            </div>
                            <div className="mt-10 info"></div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div className="footer-tittle2">
                        <h4>Let’s Get Social</h4>
                      </div>

                      <div className="footer-social">
                        <a href="https://www.facebook.com/sai4ull">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-google"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row d-flex justify-content-between">
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>About Us</h4>
                        <ul>
                          <li>
                            <a href="#">Online Learning</a>
                          </li>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Careers</a>
                          </li>
                          <li>
                            <a href="#">Press Center</a>
                          </li>
                          <li>
                            <a href="#">Become an Instructor</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Campus</h4>
                        <ul>
                          <li>
                            <a href="#">Our Plans</a>
                          </li>
                          <li>
                            <a href="#">Free Trial</a>
                          </li>
                          <li>
                            <a href="#">Academic Solutions</a>
                          </li>
                          <li>
                            <a href="#">Business Solutions</a>
                          </li>
                          <li>
                            <a href="#"> Government Solutions</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Study</h4>
                        <ul>
                          <li>
                            <a href="#">Admissions Policy</a>
                          </li>
                          <li>
                            <a href="#">Getting Started</a>
                          </li>
                          <li>
                            <a href="#">Online Application</a>
                          </li>
                          <li>
                            <a href="#">Visa Information</a>
                          </li>
                          <li>
                            <a href="#">Tuition Calculator</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Spport</h4>
                        <ul>
                          <li>
                            <a href="#">Support</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                          <li>
                            <a href="#">System Requirements</a>
                          </li>
                          <li>
                            <a href="#">Register Activation Key</a>
                          </li>
                          <li>
                            <a href="#">Site feedback</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-12">
                    <div className="footer-copy-right text-center">
                      <p>
                        Copyright &copy; 2023 All rights reserved | This
                        template is made with{" "}
                        <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
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