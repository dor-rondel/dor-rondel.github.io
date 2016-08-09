import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <h1 className="sectionTitle"><u>Contact</u></h1>
        <div className="row">
          <form className="col s12 m8 offset-m2" action="https://formspree.io/dor.rondel@gmail.com" method="POST">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" name="firstName"/>
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" name="lastName"/>
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" name="email"/>
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" name="messageContent"></textarea>
                <label for="textarea1">Message</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light red lighten-1 submitButton" type="submit" name="action">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}
