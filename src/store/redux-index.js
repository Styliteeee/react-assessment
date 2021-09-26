import { createStore } from 'redux';

const counterReducer = (state = { email: '', password: '' }, action) => {
    if(action.type === 'ADD_INFO') {
        console.log('email: ' + action.email + ", password: " + action.password);
        return {
            email: '', 
            password: ''
        };

    }

    return state;
}

const store = createStore(counterReducer);

export default store;