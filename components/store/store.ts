import {combineReducers} from 'redux'
import {configureStore} from "@reduxjs/toolkit";
import {test} from "../reducers/test/testSlice";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
export const rootReducer = combineReducers({
    test: test
})
// непосредственно создаём store
export const store = configureStore({
    reducer: rootReducer,
});

// @ts-ignore
window.store = store