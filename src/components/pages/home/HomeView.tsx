import Card from '../../UI/card';
import useHome from './useHome';
import styles from './home.module.css';
import LoaderSkeleton from '../../UI/loader';
import { Movie } from './movie.interface';

const HomeView = () => {
  const { movieList, setpage, page, isLoading } = useHome();

  return (
    <div className={styles.home}>
      <img className={styles.banner} src="/dumovie.jpeg" alt="banner" />
      <div className={styles.container}>
        {
          isLoading && Array.from({length:10}).map((_, i) => (
            <LoaderSkeleton radius={10} width={220} height={320} key={i}/>
          ))
        }
        {!isLoading && movieList?.map((movie: Movie, index: number) => (
          <Card
            key={index}
            text={movie.originalTitleText.text}
            thumbnail={movie.primaryImage}
            onClick={() => alert(movie.originalTitleText.text)}
          />
        ))}
      </div>
      {!isLoading && (
        <div className={styles.pagination}>
          {page > 1 && (
            <button onClick={() => setpage((prev) => prev - 1)}>
              Prev Page
            </button>
          )}
          {movieList?.length > 0 && (
            <button onClick={() => setpage((prev) => prev + 1)}>
              Next Page
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeView;
