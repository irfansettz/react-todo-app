import { createSlice } from "@reduxjs/toolkit";

export const reducerTodo = createSlice({
    name: 'todo',
    initialState: {
        value: []
    },
    reducers: {
        addTodo: (state, {payload}) => {
            let todos = [...state.value];
            todos.push(payload);
            state.value = todos;
        },
        isDone: (state, {payload}) => {
            let todos = [...state.value].filter(item => item.id !== payload.id);
            todos.push(payload);
            state.value = todos;
        },
        deleteTodo: (state, {payload}) => {
            let todos = [...state.value].filter(item => item.id !== payload.id);
            state.value =todos;
        }
    }
});

export const {addTodo, isDone, deleteTodo} = reducerTodo.actions;

export default reducerTodo.reducer;