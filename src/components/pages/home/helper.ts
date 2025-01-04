import services from '../../../services/movies/services';

const getMovies = async () => {
  try {
    return await services.fetchMovieList();
  } catch (err: Error | any) {
    throw Error(err);
  }
};

export { getMovies };
