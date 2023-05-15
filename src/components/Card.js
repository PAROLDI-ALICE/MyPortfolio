import React from "react";

function Card(props) {
  return (
    <div>
      <div className="workCards">
        <div className="card">
          <img src={props.image} />
          <div className="picLegend">
            <p>{props.legend}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
