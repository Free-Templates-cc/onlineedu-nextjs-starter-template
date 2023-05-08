import React from 'react'

type Props = {}

const BackToTop = (props: Props) => {
  return (
    <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt"></i>
          </a>
        </div>
  )
}

export default BackToTop