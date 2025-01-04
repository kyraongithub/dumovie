import api from '../api';
import movieEndpoint from './endpoints';

const fetchMovieList = async () => {
  const response = await api.get(`${movieEndpoint.getMovie}`);
  const { data } = response;
  return { ...data.results };
};

const fetchMovieDetail = async (title: string) => {
  const response = await api.get(`${movieEndpoint.getMovie}/${title}`);
  return response.data;
};

const services = {
  fetchMovieList,
  fetchMovieDetail,
};
export default services;
