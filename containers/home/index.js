import FeaturedMovie from '@/components/featured-movie';
import Genres from '@/components/genres';
import MoviesSection from '@/components/movies-section';

const HomeContainer = ({
  genres = [],
  popularMovies = [],
  topRatedMovies = [],
  selectedGenreMovies,
}) => {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Genres genres={genres.slice(0, 5)} />
      {!!selectedGenreMovies.movies.length && (
        <MoviesSection
          title={
            genres.find(
              (genre) => genre.id.toString() === selectedGenreMovies.id
            )?.name
          }
          movies={selectedGenreMovies.movies.slice(0, 6)}
        />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Top Rated Films"
        movies={topRatedMovies.slice(1, 7)}
      />
    </div>
  );
};

export default HomeContainer;
