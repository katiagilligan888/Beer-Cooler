import React from "react";

const Beer = props => {
  return (
    <div className="beer-card">
      <div className="beer">
        <p>{props.beer.name}</p>
        <p>{props.beer.likes}</p>
      </div>
    </div>
  );
};

export default Beer;
