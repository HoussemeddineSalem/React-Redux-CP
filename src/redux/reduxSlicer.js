import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const reduxSlicer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveToDo: (state, action) => {
            state.todoList.push(action.payload)
        },
        deleteToDo: (state, action) => {
            state.todoList.splice(...action.payload)
        },

        editToDo: (state,action) => {
            state.todoList.splice(...action.payload)
        }
    }
});

export const {
    saveToDo,
    deleteToDo,
    editToDo

} = reduxSlicer.actions;
export const selectTodoList = state => state.todoList;
export default reduxSlicer.reducer