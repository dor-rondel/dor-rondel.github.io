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
            <a href="./docs/dor_rondel_technical_resume.pdf">
              <i className="fa fa-file-text" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="stackoverflow.com/users/3833784/dor-ron">
              <i className="fa fa-stack-overflow" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ValparDor">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}
