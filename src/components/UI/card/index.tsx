import { useState } from 'react';
import styles from './card.module.css';
import { CardProps } from './card.interface';

const Card = (props: CardProps) => {
  const { text = '', thumbnail, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        className={styles.cardImage}
        src={thumbnail?.url ?? '/public/movie.jpeg'}
        alt={text}
      />
      {isHovered && <b className={styles.cardText}>{text}</b>}
    </div>
  );
};

export default Card;
