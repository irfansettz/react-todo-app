import { configureStore } from "@reduxjs/toolkit";
import reducerTodo from "./reducerTodo";

export default configureStore({
    reducer: {
        todo: reducerTodo,
    }
});