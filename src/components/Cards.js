import React from "react";
import { Link } from "react-router-dom";

function Cards({datos}) {

  return (
    <Link to={`/item/${datos.id}`}>
      <div className="card" style={{background:`url(${datos.thumbnail})`}}></div>
      <section className="info position-absolute">
        <div className="background" style={{background:`url(${datos.thumbnail})`}}></div>
        <h4>{datos.title}</h4>
        <div className="image" style={{background:`url(${datos.thumbnail})`}}></div>
        <footer>
          <h5>Time Played</h5>
          <p>Total 10h in this week</p>
        </footer>
      </section>
    </Link>
  );
}

export default Cards;
