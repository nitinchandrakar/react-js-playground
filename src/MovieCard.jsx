import React from "react";

const MovieCard = ({movieData}) => {
  return (
    <div className="movie">
      <div>
        <p>{movieData.Year}</p>
      </div>
      <div>
        <img
          src={
            movieData.Poster !== "N/A"
              ? movieData.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movieData.Title}
        ></img>
      </div>

      <div>
        <span>
          {movieData.Type}
          <h3>{movieData.Title}</h3>
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
