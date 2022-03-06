function returnSum(a){
  function returnNum(b){
    return a + b;
  }
  return returnNum;
}




// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let index = 0; index < numberOfFilms; index++) {
//   const filmAsk = () => {
//     const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
//       filmRating = prompt("На сколько оцените его?", "");
//     if (
//       lastFilm !== "" &&
//       filmRating !== "" &&
//       lastFilm !== null &&
//       filmRating !== null &&
//       lastFilm.length < 50
//     ) {
//       personalMovieDB.movies[lastFilm] = filmRating;
//     } else {
//       filmAsk();
//     }
//   };
//   filmAsk();
//   console.log(index);
// }

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count <= 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }
