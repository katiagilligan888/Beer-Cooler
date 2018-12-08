import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import Beer from "./Beer";

class BeerDisplayAll extends Component {
  constructor() {
    super();
    this.state = {
      beer: [],
      beerName: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer"
      )
      .then(beers => {
        this.setState({ beer: beers.data });
      });
  }

  onInputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const newBeer = {
      name: this.state.beerName,
      likes: "0"
    };

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer",
        newBeer
      )
      .then(id => {
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer"
          )
          .then(beers => {
            this.setState({ beer: beers.data, beerName: "" });
          });
      });

    // since the post request does not return the updated list of beers,
    // a new get request has to be made to the API to update the UI without refreshing the page!
  };

  render() {
    return (
      <div className="beer-display">
        <Header />
        <h3>Have an IPA you want to add to the API?</h3>
        <p>Add a new beer here!</p>
        <form onSubmit={this.onSubmitHandler}>
          <input
            value={this.state.beerName}
            name="beerName"
            onChange={this.onInputChangeHandler}
            type="text"
            placeholder="Name of Beer"
          />
          <button className="beer-form-button" type="submit">
            Add it Now!
          </button>
        </form>
        {this.state.beer.map(beer => {
          return <Beer key={beer.id} beer={beer} />;
        })}
      </div>
    );
  }
}

export default BeerDisplayAll;
