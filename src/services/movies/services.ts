import api from '../api';
import movieEndpoint from './endpoints';

const fetchMovieList = async (pageSize: number) => {
  const response = await api.get(`${movieEndpoint.getMovie}?limit=${pageSize}`);
  const { data } = response;
  return data.results;
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
