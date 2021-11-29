'use strict';
//* Задание №1
//* Киноман

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberLastFilms() {
  for (let i = 0; i < 2; ) {
    const lastMovie = prompt('Один из последних просмотренных фильмов?');
    const rateMovie = +prompt('Оцените фильм?');

    if (
      lastMovie != null &&
      lastMovie != '' &&
      lastMovie.length < 50 &&
      !isNaN(rateMovie) &&
      rateMovie != '' &&
      rateMovie > 0 &&
      rateMovie != null
    ) {
      personalMovieDB.movies[lastMovie] = rateMovie;
      i++;
      continue;
    } else {
      alert('Ответ не действителен! Ответьте заново!');
    }
  }
}
rememberLastFilms();

function detectPersonLevel(objCount) {
  if (objCount.count < 0) {
    alert('Произошла ошибка!');
  } else if (objCount.count < 10) {
    alert('Просмотрено довольно мало фильмов!');
  } else if (objCount.count < 30) {
    alert('Вы классический зритель!');
  } else {
    alert('Вы киноман!');
  }
}

detectPersonLevel(personalMovieDB);
function showMyDB(obj) {
  if (!obj.privat) {
    console.log(obj);
  }
}

showMyDB(personalMovieDB);

function selectGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр номер ${i}`);
  }
}

selectGenres();
