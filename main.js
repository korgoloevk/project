let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

start();

rememberMyFilms();

detectPersonalLevel();

showMyDB(personalMovieDB.privat);

writeYouGenres();


function writeYouGenres(){
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
    }
}

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

function start(){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    personalMovieDB.count = numberOfFilms;

}

function rememberMyFilms(){
    for (let index = 0; index < numberOfFilms; index++) {
        const filmAsk = () => {
          const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
            filmRating = prompt("На сколько оцените его?", "");
          if (
            lastFilm !== "" &&
            filmRating !== "" &&
            lastFilm !== null &&
            filmRating !== null &&
            lastFilm.length < 50
          ) {
            personalMovieDB.movies[lastFilm] = filmRating;
          } else {
            filmAsk();
          }
        };
        filmAsk();
        console.log(index);
      }
}

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
      } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
      } else {
        console.log("Произошла ошибка");
      }
}