import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Item({ dato }) {
  console.log(dato.screenshots);
  const {
    developer,
    freetogame_profile_url,
    game_url,
    genre,
    id,
    platform,
    publisher,
    release_date,
    description,
    thumbnail,
    title,
  } = dato;

  return (
    <>
      
        <Slide>
          {dato.screenshots.map((slideImage, index) => (
            <div className="each-slide-effect" key={index}>
              <div style={{ backgroundImage: `url(${slideImage.image})` }}>
              </div>
            </div>
          ))}
        </Slide>
        <div>
          <h2>{title}</h2>
        </div>

    </>
  );
}

export default Item;
