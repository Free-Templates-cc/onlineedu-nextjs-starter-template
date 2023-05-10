import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import { faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLock, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import useVerticalScrollEvent from "@/hooks/useVerticalScrollEvent";
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {

  const stickyRef = useRef<HTMLDivElement>(null);

  useVerticalScrollEvent((evt:any) => {
    if(evt.currentTarget.scrollY >= 60) {
      (stickyRef.current as HTMLDivElement).classList.add('sticky-bar');
      return;
    } 
    (stickyRef.current as HTMLDivElement).classList.remove('sticky-bar');
  });

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
        <div className="header-bottom header-sticky" ref={stickyRef}>
          <div className="logo d-none d-lg-block">
            <Link href="/">
              <img src="/images/logo/logo.png.webp" alt="" />
            </Link>
          </div>
          <div className="container">
            <div className="menu-wrapper">
              <div className="logo logo2 d-block d-lg-none">
              <Link href="/">
                  <img src="/images/logo/logo.png.webp" alt="" />
                </Link>
              </div>

              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                    <Link href="/">Home</Link>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onlineedu/about.html">About</a>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onlineedu/courses.html">Courses</a>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onlineedu/instructor.html">Instructors</a>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onlineedu/blog.html">Blog</a>
                      <ul className="submenu">
                        <li>
                          <a href="https://preview.colorlib.com/theme/onlineedu/blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="https://preview.colorlib.com/theme/onlineedu/blog_details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="https://preview.colorlib.com/theme/onlineedu/elements.html">Element</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onlineedu/contact.html">Contact</a>
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