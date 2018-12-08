import React from "react";

const Beer = props => {
  return (
    <div className="beer-card">
      <div className="beer">
        <p>{props.beer.name}</p>
        <p> Likes: {props.beer.likes}</p>
        <p onClick = {props.like} >Like Here!</p>
      </div>
    </div>
  );
};

export default Beer;
