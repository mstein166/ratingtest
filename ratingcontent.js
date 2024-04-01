//find letterboxd movie title on page
const titleElement = document.querySelector('h1.headline-1'); // Update this selector based on actual usage
if (titleElement !== null) {
  const movieTitle = titleElement.textContent;
  chrome.runtime.sendMessage({type: "MOVIE_TITLE", title: movieTitle});
  console.log(movieTitle);
} else {
  console.error('Movie title element not found.');
}
const title = document.querySelector('h1.headline-1');


//pass letterboxd movie title to TMDB API to retrieve user score
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmEzZmJjZjA5NzMxNzZkYTYxM2U1YTNjNjdlY2RjMiIsInN1YiI6IjYyZWM5NTVmZWE4NGM3MDA1ZWNmYjhlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIRVqNSgLZsrV9torSrJ9gCSWoaPBYipdqPg87V7JLk'
  }
};

fetch('https://api.themoviedb.org/3/search/movie?query={#movieTitle)&include_adult=false&language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
//trying to set integer to ID from query
  int movieID = id;

fetch('https://api.themoviedb.org/3/movie/{#movieID}?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
