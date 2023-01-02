import {createAsyncThunk} from "@reduxjs/toolkit";
import {firstSlice} from "../reducers/test/firstSlice";
import {api} from "../api/instance";

export const getOMD = createAsyncThunk('get/OMD', async ({title, page}: { title: string, page: number }, thunkAPI) => {
    thunkAPI.dispatch(firstSlice.actions.saveSearchTitle(title))
    const res = await api.getContent(title, page)
    return res.data
})