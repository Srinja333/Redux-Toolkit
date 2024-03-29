import { createSlice } from '@reduxjs/toolkit'

let initialState=[]


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
return state.filter((s)=>s.id!==action.payload)
        }
    }
})

export const{add,remove}=cartSlice.actions;
export default cartSlice.reducer; 