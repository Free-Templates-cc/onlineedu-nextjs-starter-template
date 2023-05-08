import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb, faMobile, faMobileAlt, faPhone, faVideo, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="categories-area section-padding30">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            <div className="section-tittle text-center mb-70">
              <span>Popular Online Courses</span>
              <h2>Lets Brows All Catagori</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat mb-50">
              <div className="cat-icon">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="#">Web Design</a>
                </h5>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
                <a href="#" className="read-more1">
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat mb-50">
              <div className="cat-icon">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="#">App Development</a>
                </h5>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
                <a href="#" className="read-more1">
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat mb-50">
              <div className="cat-icon">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="#">Video Editing</a>
                </h5>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
                <a href="#" className="read-more1">
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat mb-50">
              <div className="cat-icon">
                <FontAwesomeIcon icon={faWifi} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="#">Digital Marketing</a>
                </h5>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
                <a href="#" className="read-more1">
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat mb-50">
              <div className="cat-icon">
                <FontAwesomeIcon icon={faSearchengin} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="#">Seo Marketing</a>
                </h5>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
                <a href="#" className="read-more1">
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat mb-50">
              <div className="cat-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="#">Content Writing</a>
                </h5>
                <p>
                  Sorem hpsum folor sixdsft amhtget, consectetur adipiscing
                  eliht, sed do eiusmod tempor incidi.
                </p>
                <a href="#" className="read-more1">
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="browse-btn2 text-center mt-50">
              <a href="courses.html" className="btn">
                Find More Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
