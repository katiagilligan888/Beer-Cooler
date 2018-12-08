import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import Beer from "./Beer";
import {CardPanel, Button} from 'react-materialize'; 

class BeerDisplayAll extends Component {
  constructor() {
    super();
    this.state = {
      beer: [],
      beerName: "", 
      errors: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer"
      )
      .then(beers => {
        this.setState({ beer: beers.data });
      }).catch(err => {
          this.setState({
              errors: "Cannot get beers from the API. Please try again!"
          })
      })
  }

  onInputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  likeHandler = (id, likes) => {
    const newLikes = {
      likes: String(Number(likes) + 1)
    };
    axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/${id}`,
        newLikes
      )
      .then(beer => {
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer"
          )
          .then(beers => {
            this.setState({ beer: beers.data });
          });
      });

    // since the put request does not return the updated list of beers,
    // a new get request has to be made to the API to update the UI without refreshing the page!
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const newBeer = {
      name: this.state.beerName,
      likes: "0"
    };

    if(this.state.beerName){
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
    }
    

    // since the post request does not return the updated list of beers,
    // a new get request has to be made to the API to update the UI without refreshing the page!
  };

  render() {
    return (
      <div className="beer-display">
        <Header/>
        <CardPanel className="beer-form amber">
        <h4>Have an IPA you want to add to the API?</h4>
        <p>Add a new beer here!</p>
        <form onSubmit={this.onSubmitHandler}>
          <input
            className = "form-input"
            value={this.state.beerName}
            name="beerName"
            onChange={this.onInputChangeHandler}
            type="text"
          />
          <Button className="beer-form-button orange darken-4" type="submit">
            Add it Now!
          </Button>
        </form>
        </CardPanel>
        <div className = "beers-list">
        {this.state.beer.map(beer => {
          return (
            <Beer
              key={beer.id}
              beer={beer}
              like={() => this.likeHandler(beer.id, beer.likes)}
            />
          );
        })}
        </div>
      </div>
    );
  }
}

export default BeerDisplayAll;
