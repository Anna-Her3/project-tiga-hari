import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice ({
    name: 'todos',
    initialState: {
        todos: [],
        isLoading: false
    },

    reducers: {
        getTodosFetch: (state) => {
            state.isLoading = true;
        },
        getTodosSuccess: (state, action) => {
            state.todos = action.payload;
            state.isLoading = false;
        },
        getTodosFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getTodosFetch, getTodosSuccess, getTodosFailure } = todosSlice.actions;

export default todosSlice.reducer;