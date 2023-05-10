import React from 'react'

type Props = {
    image: string;
    title: string;
}

const BlogItem = (props: Props) => {
    const { image, title } = props;
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="home-blog-single mb-30">
                    <div className="blog-img-cap">
                      <div className="blog-img">
                        <img src={image} alt="" />

                        <div className="blog-date text-center">
                          <span>24</span>
                          <p>Now</p>
                        </div>
                      </div>
                      <div className="blog-cap">
                        <p>| Properties</p>
                        <h3>
                          <a href="https://preview.colorlib.com/theme/onlineedu/blog_details.html">
                            {title}
                          </a>
                        </h3>
                        <a href="https://preview.colorlib.com/theme/onlineedu/blog_details.html" className="more-btn">
                          Read more »
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default BlogItem