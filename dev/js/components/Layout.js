import React from 'react';

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import MainPicture from './MainPicture';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Typed from './Typed';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div id="particles-js">
            <Navbar />
            <ul id="landing">
              <li><MainPicture /></li>
              <li><Typed /></li>
            </ul>
          </div>
        </div>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    )
  }
}
