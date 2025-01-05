import useHome from './useHome';

const HomeView = () => {
  const { movieList } = useHome();
  console.log(movieList);
  return <div>edit home view</div>;
};

export default HomeView;
