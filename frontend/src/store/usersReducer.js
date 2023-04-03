import { csrfFetch } from "./csrf";

// ACTION TYPES
const RECEIVE_USER = 'users/RECEIVE_USER';
const REMOVE_USER = 'users/REMOVE_USER';

// ACTION CREATORS
export const receiveUser = user => ({
    type: RECEIVE_USER,
    payload: user
});

export const removeUser = userId => ({
    type: REMOVE_USER,
    userId
});

// THUNK ACTION CREATORS
export const loginUser = user => async dispatch => {
    let res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    let data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveUser(data.user))
};

export const logoutUser = userId => async dispatch => {
    let res = await csrfFetch('/api/session', {
        method: 'DELETE'
    });
    sessionStorage.setItem('currentUser', null)
    dispatch(removeUser(userId));
}

export const createUser = user => async dispatch => {
    let res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    let data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveUser(data.user));
}

export const fetchUsers = () => async dispatch => {
    const res = await csrfFetch('/api/users');
    const data = await res.json();
    dispatch(receiveUsers(data.users));
};

export const receiveUsers = users => ({
    type: RECEIVE_USER,
    payload: users
});

// Selector
export const getUser = userId => state => {
    return state?.users ? state.users.find(user => user.id === userId) : null;
}

export const getUsers = state => {
    return state?.users ? state.users : [];
} 

// REDUCER
const usersReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return action.payload;
        case REMOVE_USER:
            return state.filter(user => user.id !== action.userId);
        default:
            return state;
    }
};

export default usersReducer;
