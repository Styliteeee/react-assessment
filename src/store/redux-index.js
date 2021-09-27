import { createSlice, configureStore } from "@reduxjs/toolkit";

// const formSlice = createSlice({
//     name: 'form_actions',
//     initialState: {isToggle: false, employeeList: [], updateInfo: []},
//     reducers: {
//         toggleFormOn(state, action) {
//             state.isToggle = action.payload;
//         },
//         toggleFormOff(state, action) {
//             state.isToggle = action.payload;
//         },
//         importEmployee(state, action) {
//             state.employeeList = action.payload;
//         },
//         addEmployee(state, action) {
//             state.employeeList.push(action.payload);
//         }
//     }
// });

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    isToggle: false,
    employeeList: [],
    updateList: [],
    getID: ""
  },
  reducers: {
    importEmployee: (state, action) => {
      return { ...state, employeeList: [...action.payload] };
    },
    addNewEmployee: (state, action) => {
      return {
        ...state,
        employeeList: [action.payload, ...state.employeeList],
      };
    },
    updateNewEmployee: (state, action) => {
      const _employee = state.employeeList.map((employ) => {
        if (employ.id === action.payload.id) {
          employ = action.payload;
        }
        return employ;
      });
      return { ...state, employeeList: [..._employee] };
    },

    deleteEmployee: (state, action) => {
        console.log(state.employeeList);
      const _employee = state.employeeList.filter(
        (employee) =>  employee.id !== action.payload.id);
      return { ...state, employeeList: [..._employee] };
    },

    toggleFormOn: (state, action) => {
      void (state.isToggle = action.payload);
    },

    toggleFormOff: (state, action) => {
      void (state.isToggle = action.payload);
    },

    getIDforUpdate: (state, action) => {
        void(state.getID = action.payload);
    },
  },
});

const store = configureStore({
  //reducer: { toggle_form: counterSlice.reducer }
  reducer: crudSlice.reducer,
});

export const formActions = crudSlice.actions;
export default store;
