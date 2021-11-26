//* Задание №1
//* Киноман

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

console.log('numberOfFilms =>>', numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastMovie = prompt('Один из последних просмотренных фильмов?');
const rateMovie = prompt('Оцените фильм?');

personalMovieDB.movies[lastMovie] = rateMovie;

console.log('personalMovieDB =>>', personalMovieDB)

 