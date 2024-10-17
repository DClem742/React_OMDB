import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className={styles['movie-card']} onClick={() => setFlipped(state => !state)}>
      <animated.div className={styles['card-front']} style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <img src={movie.Poster} alt={movie.Title} className={styles['movie-poster']} />
      </animated.div>
      <animated.div className={styles['card-back']} style={{ opacity, transform: transform.to(t => `${t} rotateY(180deg)`) }}>
        <div className={styles['movie-info']}>
          <h2 className={styles['movie-title']}>{movie.Title}</h2>
          <p className={styles['movie-year']}>{movie.Year}</p>
          <p className={styles['movie-rating']}>Rating: {movie.imdbRating}</p>
          <p className={styles['movie-plot']}>{movie.Plot}</p>
        </div>
      </animated.div>
    </div>
  )
}

export default MovieCard