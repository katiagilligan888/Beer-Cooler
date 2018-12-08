import React from "react";
import {Button, CardPanel} from 'react-materialize'; 

const Beer = props => {
  return (
    <CardPanel className="deep-orange darken-4 beer-card">
      <div className="beer">
        <p>{props.beer.name}</p>
        <p> Likes: {props.beer.likes}</p>
        <Button className = "indigo darken-2" onClick = {props.like} >Like</Button>
      </div>
    </CardPanel>
  );
};

export default Beer;
