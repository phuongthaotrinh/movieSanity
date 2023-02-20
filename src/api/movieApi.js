import sanityClient from "./config";

export async function getMovies() {
    const movies = await sanityClient.fetch('*[_type == "movie"]')
    return movies
  }