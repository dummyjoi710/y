import { createSlice } from "@reduxjs/toolkit";

const lmreducer = createSlice({
    name:'lm',
    initialState:{act:false,route:null},
    reducers:{
        open(state, action){
            state.act = true;
            state.route = action.payload.route;
        },
        close(state, action){
            state.act = false
            state.route = null;
        }
    }
})

export const { open, close } = lmreducer.actions;
export default lmreducer.reducer;