import React, { useState, useEffect } from "react";
import sanityClient  from "../../api/config";
import { getMovies } from "../../api/movieApi";

const ListMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  const data =   getMovies();
  console.log(data);
  }, []);

  
  return <div>ListMovie</div>;
};

export default ListMovie;
