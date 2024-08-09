import { configureStore } from "@reduxjs/toolkit"
import movieUpComingSlice from "./movieUpComingSlice"
import movieNowPlaySlice from "./movieNowPlaySlice"
import detailMovieSlice from "./movieDetailSlice"
import videoMovieSlice from "./videoMovieSlice"
import userSlice from "./userSlice"
import searchMovieSlice from "./searchMovieSlice"
import recommendMoviesSlice from './recommendMovieSlice'
import reviewMoviesSlice from './reviewMovieSlice'
import moviePopularSlice from './popularMovieSlice'
import genresSlice from './filterGenresSlice'
import genresMovieSlice from './movieGenresSlice'
import favoriteMovieSlice from './favoriteMovieSlice'
import airingTodayTVSlice from "./airingTodayTVSlice"
import favoriteTVSlice from "./favoriteTVSlice"
import searchTVSlice from "./tvSearchSlice"
import ontheairTVSlice from "./ontheairTVSlice"
const store=configureStore({
    reducer:{
        upComingMovies:movieUpComingSlice,
        nowPlayMovies:movieNowPlaySlice,
        detailMovies:detailMovieSlice,
        videoMovies:videoMovieSlice,
        searchMovie:searchMovieSlice,
        recommendMovies:recommendMoviesSlice,
        reviewMovies:reviewMoviesSlice,
        popularMovies:moviePopularSlice,
        filterGenres:genresSlice,
        genresMovies:genresMovieSlice,
        favoriteMovie:favoriteMovieSlice,
        airingTodayTV:airingTodayTVSlice,
        favoriteTV:favoriteTVSlice,
        searchTV:searchTVSlice,
        onTheAirTV:ontheairTVSlice,
        user:userSlice,
    }
})

export default store