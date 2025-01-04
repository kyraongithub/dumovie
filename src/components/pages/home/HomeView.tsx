import useHome from './useHome';

const HomeView = () => {
  const { movieList } = useHome();
  console.log(movieList);
  return <div>HomeView</div>;
};

export default HomeView;
