import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <section id='about'>
        <h1 className="sectionTitle"><u>About</u></h1>
        <div className="row">
          <div className="paragraph col s8 offset-s2">
            <p> ¡Hola! My name is Dor Rondel and I'm <a href="http://judaism.about.com/od/judaismbasics/g/chai.htm">18</a> years old.
                I recently completed my freshmen year at the <a href="https://www.ccny.cuny.edu/engineering/">Grove School of Engineering</a>
                &nbsp;at the <a href="https://www.ccny.cuny.edu/">City College of New York</a> where I plan on majoring
                in computer science and minoring in biology. Over the past year at CCNY I completed a variety of courses from a
                diverse <a href="https://www.ccny.cuny.edu/sites/default/files/2015-2016%20Curriculum%20CSc%202015-12-15%20080416.pdf">curriculum</a>,
                as well as participated in my university's chapter of the <a href="http://www.acm.org/">Association for Computing Machinery</a>.
            </p>
            <p> I spend most of my free time doing activities pertaining to programming. I'm particularly interested in <a href="https://generalassemb.ly/blog/what-is-front-end-web-development">front-end web development</a>,
                ranging from the design aspects to the new specifications of <a href="http://es6-features.org/">ES2015</a>
                &nbsp;(and '16); such as destructuring and block-scoping, but more importantly, the <a href="http://www.2ality.com/2016/02/exponentiation-operator.html">
                exponentiaion operator</a> (*chuckle*). I'm currently attempting to master <a href="https://facebook.github.io/react/">React</a> (and I'm loving it - this site was made using it!), learning different
                software architectures such as: <a href="https://facebook.github.io/flux/">Flux</a>, <a href="http://redux.js.org/">Redux</a>,
                and <a href="https://mobxjs.github.io/mobx/">Mobx</a>, and how to implement them into React-based applications.
            </p>
            <p> Aside from front-end development, I enjoy learning about other programming fields. Occassionally, I try to do problems do computational
                biology problems on <a href="http://rosalind.info/users/Dor-Ron/">Project Rosalind</a>. Additionally, I am also a member of <a href="https://ctftime.org/team/20748">CCNYSec</a>,
                where I compete with my awesome teammates in <a href="https://ctftime.org/ctf-wtf/">CTF</a> competitions to explore my computer security interest. Finally,
                to complement my interest in front-end development, I dabble with <a href="https://generalassemb.ly/blog/what-is-back-end-web-development/">back-end development</a> as well from time to time.
            </p>
            <p> When I'm not programming, you'd usually find me playing beach volleyball, jogging, or listening to either <a href="https://www.youtube.com/watch?v=I7SdSKKMPNY">foreign rap</a> or <a href="https://www.youtube.com/watch?v=OEzhsAzdRGY">reggaeton</a>.
                Of course I watch some TV as well, currently I'm watching <a href="http://www.usanetwork.com/mrrobot">Mr. Robot</a> and <a href="http://www.mako.co.il/tv-milers-crossroads?Partner=NavBar">צומת מילר</a>
                &nbsp;(pronounced Tzomet Meelehr in case you were wondering).
            </p>
          </div>
        </div>
      </section>
    )
  }
}
