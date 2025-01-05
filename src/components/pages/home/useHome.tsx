import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { getMovies } from './helper';

const useHome = () => {
  const [pageSize, setpageSize] = useState<number>(10);
  const getMovieList = useCallback(async () => getMovies(pageSize), [pageSize]);

  const movieList = useQuery({
    queryKey: ['movieList', pageSize],
    queryFn: getMovieList,
  });

  return { movieList: movieList.data, setpageSize };
};

export default useHome;
