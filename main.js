const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  writeYouGenres: function () {
    for (let i = 0; i < 3; i++) {
          this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
          if (this.genres[i] === '' || this.genres[i] === null) {
            i -= 1;
          }
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(this);
    }
  },
  start: function () {
    this.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      this.count === "" ||
      this.count === null ||
      isNaN(this.count)
    ) {
      this.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }  
  },
  rememberMyFilms: function () {
    for (let index = 0; index < this.count; index++) {
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
          this.movies[lastFilm] = filmRating;
        } else {
          filmAsk();
        }
      };
      filmAsk();
      console.log(index);
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  toggleVisibleMyDB: function() {
    if (this.privat === true) {
      this.privat = false;
    }else{
      this.privat = true;
    }
  },
};

personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYouGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

// start();

// rememberMyFilms();

// detectPersonalLevel();

// showMyDB(personalMovieDB.privat);

// writeYouGenres();

// function writeYouGenres() {
//   for (let i = 0; i < 3; i++) {
//     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
//   }
// }

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// function start() {
//   numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//   while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
//     numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//   }
//   personalMovieDB.count = numberOfFilms;

// }

// function rememberMyFilms() {
//   for (let index = 0; index < numberOfFilms; index++) {
//     const filmAsk = () => {
//       const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
//         filmRating = prompt("На сколько оцените его?", "");
//       if (
//         lastFilm !== "" &&
//         filmRating !== "" &&
//         lastFilm !== null &&
//         filmRating !== null &&
//         lastFilm.length < 50
//       ) {
//         personalMovieDB.movies[lastFilm] = filmRating;
//       } else {
//         filmAsk();
//       }
//     };
//     filmAsk();
//     console.log(index);
//   }
// }

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count <= 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count > 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }
