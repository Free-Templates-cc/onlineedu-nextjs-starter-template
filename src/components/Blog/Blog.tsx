import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className="home-blog-area section-padding30">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-tittle text-center mb-50">
                    <span>Our Latest News From Our Blog</span>
                    <h2>Latest News From Blog</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="home-blog-single mb-30">
                    <div className="blog-img-cap">
                      <div className="blog-img">
                        <img src="/images/gallery/home-blog1.png.webp" alt="" />

                        <div className="blog-date text-center">
                          <span>24</span>
                          <p>Now</p>
                        </div>
                      </div>
                      <div className="blog-cap">
                        <p>| Properties</p>
                        <h3>
                          <a href="blog_details.html">
                            Footprints in Time is perfect House in Kurashiki
                          </a>
                        </h3>
                        <a href="blog_details.html" className="more-btn">
                          Read more »
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="home-blog-single mb-30">
                    <div className="blog-img-cap">
                      <div className="blog-img">
                        <img src="/images/gallery/home-blog2.png.webp" alt="" />

                        <div className="blog-date text-center">
                          <span>24</span>
                          <p>Now</p>
                        </div>
                      </div>
                      <div className="blog-cap">
                        <p>| Properties</p>
                        <h3>
                          <a href="blog_details.html">
                            Footprints in Time is perfect House in Kurashiki
                          </a>
                        </h3>
                        <a href="blog_details.html" className="more-btn">
                          Read more »
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Blog