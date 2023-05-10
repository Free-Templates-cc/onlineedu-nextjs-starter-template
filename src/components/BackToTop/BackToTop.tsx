import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const BackToTop = (props: Props) => {
  return (
    <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <FontAwesomeIcon icon={faLevelUpAlt} />
          </a>
        </div>
  )
}

export default BackToTop