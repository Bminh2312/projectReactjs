import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favoriteTVItems: [],

}

const favoriteTVSlice = createSlice({
    name: "favoriteTV",
    initialState,
    reducers: {
        getTV(state) {
            const storedFavorites = localStorage.getItem('favoriteTV');
            state.favoriteTVItems = storedFavorites ? JSON.parse(storedFavorites) : [];
        },
        addTV(state, action) {
            const { title, img, id } = action.payload;
            
            // Check if the movie already exists in favoriteItems
            const existingItem = state.favoriteTVItems.find(item => item.title === title && item.img === img);
            
            if (!existingItem) {
                // Generate a new ID
                const newId = state.favoriteTVItems.length === 0
                    ? 1
                    : Math.max(...state.favoriteTVItems.map(item => item.TVId)) + 1;

                // Add new movie to favoriteItems
                state.favoriteTVItems.push({
                    title,
                    img,
                    TVId: newId,
                    id,
                    status: false
                });

                // Update local storage
                localStorage.setItem('favoriteTV', JSON.stringify(state.favoriteTVItems));
                
            }
            
            console.log(state.favoriteTVItems);
        },
        deleteTV(state, action) {
            state.favoriteTVItems = state.favoriteTVItems.filter(
                item => !(item.id === action.payload.id)
            );
        },
        removeTV(state, action) {
            if (Array.isArray(state.favoriteTVItems)) {
                state.favoriteTVItems = state.favoriteTVItems.filter(
                    item => !(item.title === action.payload.title && item.img === action.payload.img)
                    
                );
                localStorage.setItem('favoriteTV', JSON.stringify(state.favoriteTVItems));
                
            } else {
                console.error('favoriteItems is not an array or is undefined');
            }
        },
        // checkList(state, action) {
        //     state.favoriteItems = state.items.map(item => item.id === action.payload ? { ...item, checked: !item.checked } : item)
        // },
        // rename(state, action) {
        //     const { id, text } = action.payload
        //     console.log(text)
        //     state.favoriteItems = state.items.map(item => item.id === id ? { ...item, title: text } : item)
        // }
    }
})

export const { addTV, deleteTV, removeTV,getTV } = favoriteTVSlice.actions
export default favoriteTVSlice.reducer