import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    items: {},
    status: 'start',
    path: 'https://image.tmdb.org/t/p/w500',
    total: 0,
    error: null,
}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWVmNGI2YjNiNGZlMjRhZDk0OTkyYWQzNDhiMTA1NiIsIm5iZiI6MTcyMjU2NjMyNS4yMzc5MTIsInN1YiI6IjY2YWIyZGNmYzFhZmMwZmE4N2MwMDZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R75_Aiz4ZtY81MT49o0RZ8WOpY4Ous1f3rBWbvulRB0"
const url = 'https://api.themoviedb.org/3/movie'


export const fetchRecommendMovies = createAsyncThunk('movies/fetchRecommendMovies', async (id,page) => {
    const urlUpComing = url + `/${id}/recommendations?language=en-US&page=${page}`
    try {
        const response = await axios.get(urlUpComing, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Response data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error; // Re-throw the error so it can be caught by the rejected case in extraReducers
    }
});



const recommendMoviesSlice = createSlice({
    name: 'recommendMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendMovies.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchRecommendMovies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
                state.total = action.payload.total_pages
                state.status = 'start'
            })
            .addCase(fetchRecommendMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.status_message
            })
    }
})

export default recommendMoviesSlice.reducer