import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo pushRight"><span className="homeLogo">Dor | דור</span></a>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="fa fa-bars pushRight" aria-hidden="true"></i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="side-nav red lighten-1" id="mobile-demo">
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
