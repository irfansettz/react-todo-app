import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerTodo from "./reducerTodo";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: []
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    todo: reducerTodo,
    // jika ingin tambahan reducer add disini
}));
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
});

export const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
    devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);

