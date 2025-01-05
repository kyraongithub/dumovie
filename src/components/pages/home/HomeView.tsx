import Card from '../../UI/card';
import useHome from './useHome';
import styles from './home.module.css';
const HomeView = () => {
  const { movieList, setpageSize } = useHome();

  return (
    <div>
      <div className={styles.container}>
        {movieList?.map((movie: any) => (
          <Card
            key={movie.id}
            text={movie.originalTitleText.text}
            thumbnail={movie.primaryImage}
            onClick={() => alert(movie.originalTitleText.text)}
          />
        ))}
      </div>
      {movieList?.length > 0 && (
        <p
          style={{ cursor: 'pointer', textAlign: 'center' }}
          onClick={() => setpageSize((prev) => prev + 10)}
        >
          load more
        </p>
      )}
    </div>
  );
};

export default HomeView;
