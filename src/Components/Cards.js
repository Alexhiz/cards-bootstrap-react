import React from "react";
import Card from "./Card";
const cards = [
  {
    id: 1,
    title: "google",
    image: "ggg.png",
    url: "https://www.google.com",
  },
  {
    id: 2,
    title: "youtube",
    image: "yyyy.png",
    url: "https://www.google.com",
  },
  {
    id: 3,
    title: "facebook",
    image: "fff.png",
    url: "https://www.google.com",
  },
];
function Cards() {
  return (
    <div className="container d-flex justify-content-center aligth-items-center">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
