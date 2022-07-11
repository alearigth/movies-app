//Assets
import trollface from "../assets/trollface.jpg";

export function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : trollface;
}
