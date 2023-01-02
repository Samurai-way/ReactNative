import {combineReducers} from 'redux'
import {configureStore} from "@reduxjs/toolkit";
import {first} from "../reducers/test/firstSlice";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
export const rootReducer = combineReducers({
    first: first
})
// непосредственно создаём store
export const store = configureStore({
    reducer: rootReducer,
});

// @ts-ignore
window.store = store