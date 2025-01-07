import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { getMovies } from './helper';

const useHome = () => {
  const [page, setpage] = useState<number>(1);
  const getMovieList = useCallback(async () => getMovies(page), [page]);

  const movieList = useQuery({
    queryKey: ['movieList', page],
    queryFn: getMovieList,
  });

  return {
    movieList: movieList.data,
    isLoading: movieList.isLoading,
    setpage,
    page,
  };
};

export default useHome;
