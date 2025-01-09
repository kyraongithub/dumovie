import classNames from 'classnames';

import styles from './loader.module.css';
import { LoaderProps } from './loader.interface';

const LoaderSkeleton = (props: LoaderProps) => {
  const { width, height, shape = 'square', radius = 0 } = props;
  return (
    <div
      className={classNames(styles.skeleton, {
        [styles.rounded]: shape === 'circle',
      })}
      style={{ width: `${width}px`, height: `${height}px`, borderRadius: `${radius}px` }}
    />
  );
};

export default LoaderSkeleton;
