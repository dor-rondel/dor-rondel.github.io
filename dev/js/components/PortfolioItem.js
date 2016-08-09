import React from 'react';

export default class PortfolioItem extends React.Component {
  render () {
    const { img, title, description, url } = this.props;
    return (
      <div className="col m4 s8 offset-m1 offset-s2">
        <div className="card z-depth-4">
          <div className="card-image">
            <img src={img}></img>
            <span className="card-title"></span>
          </div>
          <div className="card-content">
            <p>{description}</p>
          </div>
          <div className="card-action">
            <a href={url}>Code</a>
          </div>
        </div>
      </div>
    )
  }
}
