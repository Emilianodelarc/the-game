import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import imagen1 from '../imagen/notImagen1.png'
import imagen2 from '../imagen/notImagen2.png'

function Item({ dato }) {
  console.log(dato.screenshots);
  console.log(dato.title);
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

  const notImage = [imagen1, imagen2]

  return (
    <>
      
        <Slide>
          {dato.screenshots.length > 0 ? dato.screenshots.map((slideImage, index) => (
              <div className="each-slide-effect" key={index}>
                <div style={{ backgroundImage: `url(${slideImage.image})` }}>
                </div>
              </div>
            )) :
            notImage.map((slideImage, index) => (
              <div className="each-slide-effect" key={index}>
                <div style={{ backgroundImage: `url(${slideImage})` }}>
                </div>
              </div>))
          }
        </Slide>
        <div>
          <h2>{title}</h2>
        </div>

    </>
  );
}

export default Item;
