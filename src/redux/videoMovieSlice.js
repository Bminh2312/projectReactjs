import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    item: {},
    status: 'start',
    path: 'https://image.tmdb.org/t/p/w500',
    error: null,
}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWVmNGI2YjNiNGZlMjRhZDk0OTkyYWQzNDhiMTA1NiIsIm5iZiI6MTcyMjU2NjMyNS4yMzc5MTIsInN1YiI6IjY2YWIyZGNmYzFhZmMwZmE4N2MwMDZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R75_Aiz4ZtY81MT49o0RZ8WOpY4Ous1f3rBWbvulRB0"
const url = 'https://api.themoviedb.org/3/movie'




export const fetchVideoMovie = createAsyncThunk('movies/fetchVideoMovie', async (id) => {
    const urlDetail = url + `/${id}/videos?language=en-US`
    try {
        const response = await axios.get(urlDetail, {
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

// export const pageProducts = createAsyncThunk('products/pageProducts', async ({page,limit}) => {
//     const respone = await axios.get(url+'/'+'?page='+page+'&'+'limit='+limit);
//     return respone.data;
// })

const videoMovieSlice = createSlice({
    name: 'videoMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideoMovie.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchVideoMovie.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item = action.payload
                state.status = 'start'
            })
            .addCase(fetchVideoMovie.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload.status_message
            })

    }
})

export default videoMovieSlice.reducer