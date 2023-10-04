import { Movie } from './types';

export function getMovies() {
  const movies: Movie[] = [
    {
      id: 1,
      title: 'The Godfather',
      overview:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      release_date: '1972-03-24',
      rating: 8.7,
    },
  ];

  return movies;
}

export function getMovie(id: number) {
  const movie = getMovies()[id];
  return movie;
}
