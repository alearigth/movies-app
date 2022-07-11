//Hooks
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
//Components
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard";
import { Spinner } from "./Spinner";
import { Empty } from "./Empty";
//Styles
import styles from "./MoviesGrid.module.css";

function MoviesGrid({ search }) {
  //States
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);
  //Condicional
  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }
  //Render
  return (
    <InfiniteScroll
      loader={<Spinner />}
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movies.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

export default MoviesGrid;
