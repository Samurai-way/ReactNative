import {createSlice} from "@reduxjs/toolkit";

export interface TestSlice{
    count: number
}

const initialState: TestSlice = {
    count: 0
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers:{
        inc(state, action){
            state.count = action.payload
        }
    },
    extraReducers:{}
})

export const test = testSlice.reducer