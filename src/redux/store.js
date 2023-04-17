import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const sagaMiddelWare = createSagaMiddleware()

const store = configureStore({
    reducer:{
        data:slice
    },
    middleware:[sagaMiddelWare]
})

export default store