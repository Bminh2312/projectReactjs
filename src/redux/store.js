import { configureStore } from "@reduxjs/toolkit"
import movieUpComingSlice from "./movieUpComingSlice"
import movieNowPlaySlice from "./movieNowPlaySlice"
import detailMovieSlice from "./movieDetailSlice"
import videoMovieSlice from "./videoMovieSlice"
import userSlice from "./userSlice"
import searchMovieSlice from "./searchMovieSlice"
import recommendMoviesSlice from './recommendMovie'
import reviewMoviesSlice from './reviewMovie'
const store=configureStore({
    reducer:{
        upComingMovies:movieUpComingSlice,
        nowPlayMovies:movieNowPlaySlice,
        detailMovies:detailMovieSlice,
        videoMovies:videoMovieSlice,
        searchMovie:searchMovieSlice,
        recommendMovies:recommendMoviesSlice,
        reviewMovies:reviewMoviesSlice,
        user:userSlice,
    }
})

export default store