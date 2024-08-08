import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favoriteItems: [],

}

const favoriteMovieSlice = createSlice({
    name: "favoriteMovie",
    initialState,
    reducers: {
        getMovie(state) {
            state.favoriteItems = JSON.parse(localStorage.getItem('favorite'))
        },
        addMovie(state, action) {
            const { title, img } = action.payload;
            
            // Check if the movie already exists in favoriteItems
            const existingItem = state.favoriteItems.find(item => item.title === title && item.img === img);
            
            if (!existingItem) {
                // Generate a new ID
                const newId = state.favoriteItems.length === 0
                    ? 1
                    : Math.max(...state.favoriteItems.map(item => item.id)) + 1;

                // Add new movie to favoriteItems
                state.favoriteItems.push({
                    title,
                    img,
                    id: newId,
                    status: false
                });

                // Update local storage
                localStorage.setItem('favorite', JSON.stringify(state.favoriteItems));
            }
            
            console.log(state.favoriteItems);
        },
        deleteMovie(state, action) {
            console.log(action.payload.id)
            state.favoriteItems = state.favoriteItems.filter(
                item => !(item.id === action.payload.id)
            );
        },
        removeMovie(state, action) {
            // Ensure state.favoriteItems is defined and is an array
            if (Array.isArray(state.favoriteItems)) {
                state.favoriteItems = state.favoriteItems.filter(
                    item => !(item.title === action.payload.title && item.img === action.payload.img)
                    
                );
                localStorage.setItem('favorite', JSON.stringify(state.favoriteItems));
            } else {
                console.error('favoriteItems is not an array or is undefined');
            }
        },
        checkList(state, action) {
            state.favoriteItems = state.items.map(item => item.id === action.payload ? { ...item, checked: !item.checked } : item)
        },
        rename(state, action) {
            const { id, text } = action.payload
            console.log(text)
            state.favoriteItems = state.items.map(item => item.id === id ? { ...item, title: text } : item)
        }
    }
})

export const { addMovie, deleteMovie, checkList, rename, removeMovie,getMovie } = favoriteMovieSlice.actions
export default favoriteMovieSlice.reducer