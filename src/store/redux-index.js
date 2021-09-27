import { createSlice, configureStore } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    isToggle: false,
    employeeList: [],
    updateList: [],
    isError: false,
    isView: false,
    noInput: false,
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
        void(state.getID = action.payload);
        console.log(state.getID);
        return { ...state, employeeList: state.employeeList.splice(state.getID, 1)}
    },

    viewEmployee: (state, action) => {
        void(state.updateList = action.payload);
    },

    viewToggle: (state, action) => {
        void(state.isView = action.payload)
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

    toggleError: (state, action) => {
        void(state.isError = action.payload)
    },

    toggleInputError: (state, action) => {
        void(state.noInput = action.payload)
    },
  },
});

const store = configureStore({
  //reducer: { toggle_form: counterSlice.reducer }
  reducer: crudSlice.reducer,
});

export const formActions = crudSlice.actions;
export default store;
