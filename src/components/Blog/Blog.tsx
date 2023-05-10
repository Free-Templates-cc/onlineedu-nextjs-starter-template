import React from 'react'
import BlogItem from './BlogItem'

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
                <BlogItem image="/images/gallery/home-blog1.png.webp" title="Footprints in Time is perfect House in Kurashiki" />
                <BlogItem image="/images/gallery/home-blog2.png.webp" title="Footprints in Time is perfect House in Kurashiki" />

              </div>
            </div>
          </div>
  )
}

export default Blog