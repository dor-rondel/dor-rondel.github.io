import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <section id="about">
        <h1 className="sectionTitle"><u>About</u></h1>
        <div className="row">
          <div className="paragraph col s8 offset-s2">
            <p> 
                ¡Hola! My name is Dor Rondel, and I am currently a 19 year old junior planning on
                getting my <a href="http://catalog.oswego.edu/preview_program.php?catoid=34&poid=3919">
                computer science BA</a> and cognitive science minor from <a href="https://www.oswego.edu">
                SUNY Oswego</a> by May 2019. 
            </p>
            <p>
                I've had a natural affinity towards programming since a young age, and spend most of 
                my free time programming all sort of different <a href="https://github.com/Dor-Ron">
                scripts</a> in the following areas: 
                full-stack web development, bioinformatics, artificial neural networks, 
                cognitive processes modelling, <a href="https://snips.ai/content/intro-to-ai/#nlp">
                natural language processing</a>, cryptography, 
                steganography, and DIY robotics.
            </p>
            <p>
                I devoted the most amount of time towards <a href="https://generalassemb.ly/blog/what-is-front-end-web-development/">
                front-end web development</a>, and am currently
                learning <a href="https://vuejs.org">VueJS</a>, which is by far my favorite Javascript 
                UI framework. After Vue, I plan on tackling either React Native or 
                <a href="https://www.nativescript.org"> Nativescript</a>, PassportJS, and more 
                AI related projects.
            </p>
            <p> 
                While you'd normally find me programming, on rare occasions I've been spotted doing other 
                things, such as: playing basketball (go Celtics!), making <a href="https://www.youtube.com/channel/UC9VsutLvgtiQY7thtAUwGUg">
                tutorial</a> videos (they're in Hebrew), cycling, translating Open Source projects, 
                and attempting to create <a href="http://artfucksme.com/moki-mioke/">surreal</a> and abstract art. 
            </p>
          </div>
        </div>
      </section>
    )
  }
}
