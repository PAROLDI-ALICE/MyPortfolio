import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="img" src={props.image} alt="" />
      <div className="picLegend">
        <p>{props.legend}</p>
      </div>
    </div>
  );
}
export default Card;
