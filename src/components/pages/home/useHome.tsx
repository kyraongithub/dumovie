import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { getMovies } from './helper';

const useHome = () => {
  const getMovieList = useCallback(async () => getMovies(), []);

  const movieList = useQuery({
    queryKey: ['movieList'],
    queryFn: getMovieList,
  });

  return { movieList: movieList.data };
};

export default useHome;
