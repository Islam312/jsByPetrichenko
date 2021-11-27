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
    console.log('done');
    personalMovieDB.movies[lastMovie] = rateMovie;
    i++;
    continue;
  } else {
    console.log('error');
    alert('Ответ не действителен! Ответьте заново!');
  }
}

function countFilms(objCount) {
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

countFilms(personalMovieDB);
