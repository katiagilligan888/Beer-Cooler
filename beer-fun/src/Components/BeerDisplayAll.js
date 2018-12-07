import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import Beer from "./Beer";

class BeerDisplayAll extends Component {
  constructor() {
    super();
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer"
      )
      .then(beers => {
        this.setState({ beer: beers.data });
        console.log(beers);
      });
  }

  render() {
    return (
      <div className="beer-display">
        <Header />
        {this.state.beer.map(beer => {
          return <Beer beer={beer} />;
        })}
      </div>
    );
  }
}

export default BeerDisplayAll;
