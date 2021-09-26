import { createStore } from 'redux';

const counterReducer = (state = { email: '', password: '', isToggle: false }, action) => {
    if(action.type === 'ADD_INFO') {
        console.log('email: ' + action.email + ", password: " + action.password);
        return {
            email: '', 
            password: ''
        };
    }

    if(action.type === 'TOGGLE_FORM_ON') {
        console.log(action.setToggle)
        return {
            isToggle: action.setToggle
        }
    }

    if(action.type === 'TOGGLE_FORM_OFF') {
        console.log(action.setToggle)
        return {
            isToggle: action.setToggle
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;