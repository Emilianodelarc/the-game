import React from "react";
import { Link } from "react-router-dom";

function Cards({datos}) {

  return (
    <Link to={`/item/${datos.id}`}>
      <div className="card" style={{background:`url(${datos.thumbnail})`}}>
        <h5 className="titulo">{datos.platform}</h5>
      </div>
          
    </Link>
  );
}

export default Cards;
