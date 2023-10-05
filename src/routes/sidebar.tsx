import React from 'react';
import { getMovies } from '../utils/movies';
import { Form, NavLink, redirect, useLoaderData, useSubmit } from 'react-router-dom';
import { Box, Button, Divider } from '@chakra-ui/react';
import MovieList from './movieList';

export function loader() {
  return getMovies();
}

export default function Sidebar() {
  const movies: any = useLoaderData();
  return (
    <Box p={4} id='sidebar'>
      <Button as={NavLink} to={'/movies/new'} shadow={'2xl'} color={'white'} background={'#3a86ff'}>
        New Movie
      </Button>
      <Divider mt={4} mb={8}/>
      <MovieList movies={movies} />
    </Box>
  );
}
