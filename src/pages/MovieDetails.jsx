//Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
//Components
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
//Styles
import styles from "./MovieDetails.module.css";

function MovieDetails() {
//States  
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);
  if (isLoading) {
    return <Spinner />;
  }
  const imageUrl = getMovieImg(movie.poster_path, 500);
  //Render
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: </strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
