import { createSlice } from "@reduxjs/toolkit";

const authreducer = createSlice({
    name:'auth',
    initialState:{user:null},
    reducers:{
        logUser(state, action){
            state.user = action.payload;
        },
        logOutUser(state, action){
            state.user = action.payload;
        }
    }
})

export const { logUser, logOutUser } = authreducer.actions;
export default authreducer.reducer;