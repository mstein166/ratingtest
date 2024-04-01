//find letterboxd movie title on page
const titleElement = document.querySelector('h1.headline-1'); // Update this selector based on actual usage
if (titleElement !== null) {
  const movieTitle = titleElement.textContent;
  chrome.runtime.sendMessage({type: "MOVIE_TITLE", title: movieTitle});
  console.log(movieTitle);
} else {
  console.error('Movie title element not found.');
}


//pass letterboxd movie title to TMDB API to retrieve user score
const apiKey = '4ba3fbcf0973176da613e5a3c67ecdc2';

async function fetchMovieIdByTitle(movieTitle) {
  try {
    const encodedTitle = encodeURIComponent(movieTitle);
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodedTitle}`);

    if (!response.ok) {
      throw new Error('API request failed');
    }

    // Parse the JSON response
    const data = await response.json();

    if (data.results.length > 0) {
      // Assuming the first result is the desired movie
      const movieId = data.results[0].id;
      return movieId;
      console.log(movieId);
    } else {
      throw new Error('No results found');
    }
  } catch (error) {
    console.error('Failed to fetch movie ID:', error.message);
    return null;
  }
}
