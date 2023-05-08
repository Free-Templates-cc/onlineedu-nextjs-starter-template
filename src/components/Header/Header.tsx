import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLock, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
    <div className="header-area">
      <div className="main-header ">
        <div className="header-top d-none d-lg-block">
          <div className="header-left-social">
            <ul className="header-social">
              <li>
                <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="col-xl-12">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="header-info-left">
                  <ul>
                    <li>
                      
                        needhelp@gmail.com
                      
                    </li>
                    <li>666 7475 25252</li>
                  </ul>
                </div>
                <div className="header-info-right">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faUser} />
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faLock} />
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom header-sticky">
          <div className="logo d-none d-lg-block">
            <a href="index.html">
              <img src="/images/logo/logo.png.webp" alt="" />
            </a>
          </div>
          <div className="container">
            <div className="menu-wrapper">
              <div className="logo logo2 d-block d-lg-none">
                <a href="index.html">
                  <img src="/images/logo/logo.png.webp" alt="" />
                </a>
              </div>

              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="courses.html">Courses</a>
                    </li>
                    <li>
                      <a href="instructor.html">Instructors</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog_details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="elements.html">Element</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-search d-none d-lg-block">
                <form action="#" className="form-box f-right ">
                  <input
                    type="text"
                    name="Search"
                    placeholder="Search Courses"
                  />
                  <div className="search-icon">
                    <div className='special-tag'>
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header