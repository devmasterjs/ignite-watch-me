import { GenreResponseProps } from "../interfaces/GenreResponseProps";
import { MovieProps } from "../interfaces/MovieProps";
import '../styles/content.scss';
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <Header title={props.selectedGenre.title} />
      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}