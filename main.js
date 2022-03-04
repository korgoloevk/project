const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
      filmRating = prompt("На сколько оцените его?", ""),
      lastFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
      filmRating2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = filmRating;
personalMovieDB.movies[lastFilm2] = filmRating2;

console.log(personalMovieDB);