import React from "react";

import HomeContainer from "@/containers/home";

import {
  fetchGenres,
  fetchMoviesByGenre,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "@/services/movie";

const HomePage = async ({ params }) => {
  const pagePromises = [
    fetchGenres(),
    fetchPopularMovies(),
    fetchTopRatedMovies(),
  ];

  if (!!params.genre?.length) {
    pagePromises.push(fetchMoviesByGenre(params.genre[0]));
  }

  const [genres, popularMovies, topRatedMovies, selectedGenreMovies] =
    await Promise.all(pagePromises);

  return (
    <HomeContainer
      genres={genres}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedGenreMovies={{
        id: params.genre?.[0] ?? "",
        movies: selectedGenreMovies ? selectedGenreMovies.slice(0, 7) : [],
      }}
    />
  );
};

export default HomePage;
