import { createSlice, configureStore } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form_actions',
    initialState: {isToggle: false, employeeList: [], updateInfo: []},
    reducers: {
        toggleFormOn(state, action) {
            state.isToggle = action.payload;
        },
        toggleFormOff(state, action) {
            state.isToggle = action.payload;
        },
        importEmployee(state, action) {
            state.employeeList = action.payload;
        },
        updateEmployee(state, action) {
            state.updateInfo = action.payload;
            console.log(state.updateInfo);
        }
    }
});

const store = configureStore({
    //reducer: { toggle_form: counterSlice.reducer }
    reducer: formSlice.reducer
});

export const formActions = formSlice.actions;
export default store;
