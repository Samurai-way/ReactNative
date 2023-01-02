import {rootReducer, store} from "./store";


export type FieldErrorType = { field: string; error: string };
export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;
export type ThunkError = {
    rejectValue: { errors: Array<string>; fieldsErrors?: Array<FieldErrorType> };
};