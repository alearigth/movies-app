import MovieCard from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css"

function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) =>(
         <MovieCard key={movies.id} movie={movie}/>
      ))}
    </ul>
  );
}

export default MoviesGrid;