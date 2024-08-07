import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[],
    
   
}

const favoriteMovieSlice = createSlice({
    name:"favoriteMovie",
    initialState,
    reducers:{
        getUser(state){
           state.user = JSON.parse(localStorage.getItem('user'))
            
        },
        removeUser(state){
            state.user = localStorage.removeItem("user");
            console.log(state.user)
        }
        
    }
})

export const {getUser,removeUser} = favoriteMovieSlice.actions
export default favoriteMovieSlice.reducer