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
    minimum_system_requirements,
    freetogame_profile_url,
    game_url,
    genre,
    id,
    platform,
    publisher,
    release_date,
    short_description,
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
        
        <div key={id} className="container py-md-5">
            <div className="cuerpo-detail">
                <div className="row">
                    <div className="desc1-izq col-md-6">
                        <img src={thumbnail} className="img-fluid" alt="game"/>
                    </div>
                    <div className="desc1-derch col-md-6 pl-lg-3">
                        <h2>{title.replace(':','')}</h2>
                        <ul>DETAIL
                          <li>PLATFORM: {platform}</li>
                          <li>GENRE: {genre}</li>
                          <li>PUBLISHER: {publisher}</li>
                          <li>DEVELOPER: {developer}</li>
                          <li>REALESE DATE: {release_date}</li>
                        </ul>
                    </div>
                </div>
                <div className="row sub-para-w3pvt my-5">

                    <h3 className="game-detail">{description}</h3>
                    <p className="mt-3 italic-blue">Minimum System Requirements.</p>
                    {minimum_system_requirements && (
                    <ul>
                      <li>{minimum_system_requirements.os}</li>
                      <li>{minimum_system_requirements.processor}</li>
                      <li>memory {minimum_system_requirements.memory}</li>
                      <li>{minimum_system_requirements.graphic}</li>
                      <li>storage {minimum_system_requirements.storage}</li>
                    </ul>)
                    }
                </div>
            </div>
        </div> 

    </>
  );
}

export default Item;
