import GenresLoading from "@/components/genres/loading";
import FeaturedMovieLoading from "@/components/featured-movie/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";

const Loading = () => {
  return (
    <>
      <FeaturedMovieLoading />
      <GenresLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
};

export default Loading;
