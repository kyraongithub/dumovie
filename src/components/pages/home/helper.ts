import services from '../../../services/movies/services';

const getMovies = async (page: number) => {
  try {
    return await services.fetchMovieList(page);
  } catch (err: Error | any) {
    throw Error(err);
  }
};

export { getMovies };
