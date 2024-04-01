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
