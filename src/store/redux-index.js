import { createStore } from "redux";

const counterReducer = (
  state = { isToggle: false, employeeList: [] },
  action
) => {
  if (action.type === "TOGGLE_FORM_ON") {
    return {
      isToggle: action.setToggle,
    };
  }

  if (action.type === "TOGGLE_FORM_OFF") {
    return {
      isToggle: action.setToggle,
    };
  }

  if (action.type === "IMPORT_EMPLOYEE") {
    console.log(action.setList);
    return {
      employeeList: action.setList,
    };
  }

  return state;
};


const store = createStore(counterReducer);

export default store;
