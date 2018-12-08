import React from "react";
import BeerLogo from '../beer-cooler-logo.jpg'; 

const Header = props => {
  return (
    <div className="header">
      <h1><strong>Beer Cooler</strong></h1>
      <h3> A Place to Categorize Your Favorite Beers </h3>
      <img className = "logo" src ={BeerLogo} width = "400" height = "300"/>
    </div>
  );
};

export default Header;
