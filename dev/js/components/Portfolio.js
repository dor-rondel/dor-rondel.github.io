import React from 'react';

import PortfolioItem from './PortfolioItem';

import { portfolioData } from './../portfolioData.js';

export default class Portfolio extends React.Component {
  constructor() {
    super()
    this.portfolioItemArray = [];
  }

  renderPortfolioItem(json, arr) {
    for (let obj in json) {
      arr.push(
      <PortfolioItem
        img={json[obj].img}
        url={json[obj].url}
        description={json[obj].description}
        title={json[obj].title}
      />)
    }
    return arr;
  }

  render() {
    return (
      <section id="portfolio">
        <h1 className="sectionTitle"><u>Portfolio</u></h1>
        <div className="row">
          {this.renderPortfolioItem(portfolioData, this.portfolioItemArray)}
          {this.portfolioItemArray.map(function(card){
            {card}
          })}
        </div>
      </section>
    )
  }
}
