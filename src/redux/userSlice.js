import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:null,
    checkAll:false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        getUser(state,action){
           state.user = action.payload
            
        },
        removeUser(state){
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

export const {getUser,removeUser} = userSlice.actions
export default userSlice.reducer