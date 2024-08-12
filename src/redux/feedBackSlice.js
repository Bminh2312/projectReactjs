import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    feedback: JSON.parse(localStorage.getItem('feedback')) || null,
};

const feedBackSlice = createSlice({
    name: "feedBack",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = {
                ...state.user
                , name: action.payload.name
                , email: action.payload.email
                , img: action.payload.img
                , phone: action.payload.phone
                , address: action.payload.address
                , gender: action.payload.gender
            }
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        getUser(state) {
            state.user = JSON.parse(localStorage.getItem('user'))

        },
        removeUser(state) {
            state.user = localStorage.removeItem("user");
            console.log(state.user)
        }

        // deleteStudent(state,action){
        //     state.students= state.students.filter(item=>item.id !== action.payload)
        // },
        // checkList(state,action){
        //     state.students= state.students.map(item=>item.id === action.payload?{...item,checked:!item.checked}:item)
        // },
        // rename(state,action){
        //     const {id,text} = action.payload
        //     console.log(text)
        //     state.students = state.students.map(item=>item.id === id?{...item,name:text}:item)
        // }
    }
})

export const { getUser, removeUser, setUser } = feedBackSlice.actions
export default feedBackSlice.reducer