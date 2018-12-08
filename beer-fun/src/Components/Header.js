import React from "react";
import BeerLogo from '../beer-cooler-logo.jpg'; 

const Header = props => {
  return (
    <div className="header">
      <h1>Beer Cooler</h1>
      <h2> A Place to Categorize Your Favorite Beers </h2>
      <img className = "logo" src ={BeerLogo} width = "400" height = "300"/>
    </div>
  );
};

export default Header;
