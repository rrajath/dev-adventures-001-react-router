import { Movie } from './types';

let movies: Movie[] = [];

export function getMovies() {
  const movies: Movie[] = [
    {
      id: 1,
      title: 'The Godfather',
      overview:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      releaseDate: '1972-03-24',
      rating: 8.7,
    },
  ];

  return movies;
}

export function getMovie(id: number) {
  const movies = getMovies();
  const movie = movies.find((m: Movie) => Number(m.id) == id);
  const releaseDate = movie.releaseDate;
  movie.releaseDate = releaseDate.substring(0, 4);
  return movie;
}

export function createMovie(updates: any) {
  movies.push(updates);
}
