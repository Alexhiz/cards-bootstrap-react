import React from "react";

function Card({ id, title, image, url }) {
  return (
    <div className="card text-center">
      <img src="" alt="imagen" />
      <div className="card-body">
        <div className="card-title">{title}</div>
      </div>
      <div className="card-footer">
        <a href={url} target="_blank" className="btn btn-outline-primary">
          Ver Mas
        </a>
      </div>
    </div>
  );
}

export default Card;
