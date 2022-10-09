import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.imgLink} alt="Location" />
      <div className="card--data">
        <div className="card--data-title">
          <i className="fa-solid fa-location-dot red"></i>
          <span className="card--data-country">{props.country}</span>
          <a className="card--data-link" href="https://maps.google.com">
            View on Goolge Maps
          </a>
        </div>
        <h1 className="card--data-destination">{props.destination}</h1>
        <p className="card--data-date">{props.date}</p>
        <p className="card--data-note">{props.note}</p>
      </div>
    </div>
  );
}

export default Card;
