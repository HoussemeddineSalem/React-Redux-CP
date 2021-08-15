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
        }

    }
});

export const {
    saveToDo

} = reduxSlicer.actions;
export const selectTodoList = state => state.todoList;
export default reduxSlicer.reducer