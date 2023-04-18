import { notFound } from "next/navigation";

import MovieContainer from "@/containers/movie";

import { fetchSingleMovie } from "@/services/movie";

const MoviePage = async ({ params, searchParams }) => {
  const movieDetail = await fetchSingleMovie(params.id);

  if (!movieDetail) {
    notFound();
  }

  //! For test
  // if (searchParams.error === "true") {
  //   throw new Error("Error happened");
  // }

  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;
