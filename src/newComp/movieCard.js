import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({id,title,description,posterURL,rating}) => {
    return ( 
        <div className="container d-flex justify-content-center align-items-center">
        <div className="card mb-4" style={{ width: "18rem", height: "520px",transition: "box-shadow 0.3s ease-in-out" }}>
          <Link to={`/movieList/movie/${id}`} style={{ textDecoration: "none", color: "black" }}>
            <img src={posterURL} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column" >
              <h6>{title}</h6>
              <div className="mt-auto">
                <p>{rating}/10</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
);
}
 
export default MovieCard;