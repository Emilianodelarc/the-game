import React from "react";
import { Link } from "react-router-dom";

function Cards({datos}) {
 
  return (
    
      <div className="card">
        <img className="img-card" src={datos.thumbnail}/>
        <div className="card-body">
          <h5 className="card-title">{datos.title}</h5>
          <div>{datos.platform == 'PC (Windows)' ? <h5><i className="fab fa-windows"></i></h5> : 
          (<h5><i className="fab fa-chrome"></i>
          <i className="fab fa-firefox"></i>
          <i className="fab fa-safari"></i></h5>)}</div>
          <p className="card-text">{datos.short_description}</p>
          <Link to={`/item/${datos.id}`} className="css-button-shadow-border-sliding--sky">info</Link>
        </div>
      </div>
      
          
    
  );
}

export default Cards;
