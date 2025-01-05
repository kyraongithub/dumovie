import services from '../../../services/movies/services';

const getMovies = async (pageSize: number) => {
  try {
    return await services.fetchMovieList(pageSize);
  } catch (err: Error | any) {
    throw Error(err);
  }
};

export { getMovies };
