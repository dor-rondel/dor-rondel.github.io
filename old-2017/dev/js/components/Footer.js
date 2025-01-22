import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul id="socialLinks">
          <li>
            <a href="https://github.com/Dor-Ron">
              <i className="fa fa-github-alt" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://medium.com/@GallegoDor">
              <i className="fa fa-medium" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="./src/docs/dor_rondel_technical_resume.pdf">
              <i className="fa fa-file-text" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="http://stackoverflow.com/users/3833784/dor-ron">
              <i className="fa fa-stack-overflow" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ValparDor">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dor-rondel-1b9a30108">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}
