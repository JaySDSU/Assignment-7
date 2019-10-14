//STEP 1
var myArray = ["John Wick", "Matrix", "Wolverine", "The Fault in Our Stars", "Pirates Of The Carribean"];
window.console.log(myArray[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "John Wick";
movies[1] = "The Secret Life of Walter Mitty";
movies[2] = "Jack Reacher";
movies[3] = "Idiots";
movies[4] = "Matrix";
window.console.log(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "John Wick";
movies[1] = "The Secret Life of Walter Mitty";
movies[2] = "Jack Reacher";
movies[3] = "Idiots";
movies[4] = "Matrix";
movies.splice(2, 0, "Hangover");
window.console.log(movies.length);

//STEP 4
var movies = [];
movies[0] = "John Wick";
movies[1] = "The Secret Life of Walter Mitty";
movies[2] = "Jack Reacher";
movies[3] = "Idiots";
movies[4] = "Matrix";
delete movies[0];
window.console.log(movies);
window.console.log("");

//STEP 5
var movies = [];
movies[0] = "John Wick";
movies[1] = "The Secret Life of Walter Mitty";
movies[2] = "Jack Reacher";
movies[3] = "Idiots";
movies[4] = "Matrix";
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
window.console.log("");
//STEP 6
var movies = [];
movies[0] = "John Wick";
movies[1] = "The Secret Life of Walter Mitty";
movies[2] = "Jack Reacher";
movies[3] = "Idiots";
movies[4] = "Matrix";
for (var movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("");

//STEP 7

var movies = [];
movies[0] = "John Wick";
movies[1] = "The Secret Life of Walter Mitty";
movies[2] = "Jack Reacher";
movies[3] = "Idiots";
movies[4] = "Matrix";
movies = movies.sort();
for (var movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("");
//STEP 8
var movies = [];
movies[0] = "John Wick";
movies[1] = "The Secret Life of Walter Mitty";
movies[2] = "Jack Reacher";
movies[3] = "Idiots";
movies[4] = "Matrix";
var leastFavMovies = []
leastFavMovies[0] = "DON";
leastFavMovies[1] = "Manto";
leastFavMovies[2] = "Race 3";

window.console.log("Movies I like:")
window.console.log("");

for (var movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("");

window.console.log("Movies I regret watching:");
window.console.log("");
for (var movie in leastFavMovies) {
    window.console.log(leastFavMovies[movie]);
}
window.console.log("");
//STEP 9
var movies = [];
movies[0] = "John Wick";
movies[1] = "The Secret Life of Walter Mitty";
movies[2] = "Jack Reacher";
movies[3] = "Idiots";
movies[4] = "Matrix";
var leastFavMovies = []
leastFavMovies[0] = "DON";
leastFavMovies[1] = "Manto";
leastFavMovies[2] = "Race 3";

movies = movies.concat(leastFavMovies);

movies.reverse();
movies.sort();


for (var movie in movies) {
    window.console.log(movies[movie]);
}


//STEP 10
var movies = [];
movies[0] = "John Wick";
movies[1] = "The Secret Life of Walter Mitty";
movies[2] = "Jack Reacher";
movies[3] = "Idiots";
movies[4] = "Matrix";
var leastFavMovies = []
leastFavMovies[0] = "DON";
leastFavMovies[1] = "Manto";
leastFavMovies[2] = "Race 3";
movies = movies.concat(leastFavMovies);
movies.reverse();
movies.sort();

window.console.log("");
window.console.log(movies[movies.length - 1])