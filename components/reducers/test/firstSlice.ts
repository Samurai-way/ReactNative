import {createSlice} from "@reduxjs/toolkit";
import {getOMD} from "../../actions/getAction";
import {SearchTitleOneFilmType} from "../../types/types";


const initialState = {
    isLoading: false as boolean,
    searchTitle: '' as string,
    page: 1 as number,
    error: '' as unknown | string,
    data: [] as SearchTitleOneFilmType[]
}

export const firstSlice = createSlice({
    name: 'first',
    initialState,
    reducers:{
        changePage: (state) => {
            state.page = state.page++
        },
        saveSearchTitle:(state, action) => {
            state.searchTitle = action.payload.title
        }
    },
    extraReducers: builder => {
        builder.addCase(getOMD.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getOMD.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload.Search
        })
        builder.addCase(getOMD.rejected, (state,action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const first = firstSlice.reducer