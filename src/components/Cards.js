import React from "react";

function Cards({datos}) {
  return (
    <div>
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
    </div>
  );
}

export default Cards;
