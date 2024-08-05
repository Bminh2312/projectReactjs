import { configureStore } from "@reduxjs/toolkit"
import movieUpComingSlice from "./movieUpComingSlice"
import movieNowPlaySlice from "./movieNowPlaySlice"
import detailMovieSlice from "./movieDetailSlice"
import videoMovieSlice from "./videoMovieSlice"
const store=configureStore({
    reducer:{
        upComingMovies:movieUpComingSlice,
        nowPlayMovies:movieNowPlaySlice,
        detailMovies:detailMovieSlice,
        videoMovies:videoMovieSlice
    }
})

export default store