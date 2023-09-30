"use client"
import { createSlice } from "@reduxjs/toolkit";

const menureducer = createSlice({
    name:'menu',
    initialState:false,
    reducers:{
        open(state, action){
            return true;
        },
        close(state, action){
            return false
        }
    }
});

export const {open, close} = menureducer.actions;
export default menureducer.reducer;