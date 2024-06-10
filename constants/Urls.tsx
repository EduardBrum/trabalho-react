const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const TMDB_API_KEY = "67989f871184bf5d4e63d95bab3d4290";

const ENDPOINTS = {
    NOW_PLAYING_MOVIES: "/movie/now_playing",
    GENRES: "/genre/movie/list",
    MOVIE: "/movie",
};

const APPEND_TO_RESPONSE = {
    SIMILAR: "similar"
}

export {TMDB_BASE_URL, TMDB_API_KEY, TMDB_IMAGE_BASE_URL, ENDPOINTS, APPEND_TO_RESPONSE};