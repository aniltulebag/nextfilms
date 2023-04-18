const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

async function delay(ms) {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
}

const fetchData = async (pathname, query = "") => {
  await delay(1000);

  try {
    const response = await fetch(
      `${API_URL}${pathname}?api_key=${API_KEY}&${query}`
    );

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const fetchGenres = async () => {
  try {
    const response = await fetchData("/genre/movie/list");
    return response.genres;
  } catch (error) {
    throw new Error("Error happened while fetching genres", error);
  }
};

const fetchPopularMovies = async () => {
  try {
    const response = await fetchData("/movie/popular");
    return response.results;
  } catch (error) {
    throw new Error("Error happened while fetching popular movies", error);
  }
};

const fetchTopRatedMovies = async () => {
  try {
    const response = await fetchData("/movie/top_rated");
    return response.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
};

const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await fetchData(
      "/discover/movie",
      `with_genres=${genreId}`
    );
    return response.results;
  } catch (error) {
    throw new Error("Error happened while fetching movies by genre", error);
  }
};

const fetchSingleMovie = async (movieId) => {
  try {
    const response = await fetchData(`/movie/${movieId}`);
    return response;
  } catch (error) {
    throw new Error("Error happened while fetching single movie", error);
  }
};

export {
  fetchGenres,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchMoviesByGenre,
  fetchSingleMovie,
};
