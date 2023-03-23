import { csrfFetch } from "./csrf";

// ACTION TYPES
export const RECEIVE_BOARD = 'boards/RECEIVE_BOARD';
export const REMOVE_BOARD = 'boards/REMOVE_BOARD';
export const RECEIVE_BOARDS = 'boards/RECEIVE_BOARDS';


// ACTION CREATORS
export const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
});

export const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
});

export const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
});

// THUNK ACTIONS
export const fetchBoards = () => async (dispatch) => {
    const res = await csrfFetch('/api/boards');

    if (res.ok) {
        const boards = await res.json();
        dispatch(receiveBoards(boards));
    }
}

export const fetchBoard = (boardId) => async (dispatch) => {
    const res = await csrfFetch(`/api/boards/${boardId}`);

    if (res.ok) {
        const board = await res.json();
        dispatch(receiveBoard(board));
    }
}

export const createBoard = (boardObj) => async (dispatch) => {
    const res = await csrfFetch(`/api/boards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(boardObj)
    });
    if (res.ok) {
        const board = await res.json();
        dispatch(receiveBoard(board));
    }
}

export const deleteBoard = boardId => async dispatch => {

    const res = await csrfFetch(`/api/boards/${boardId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (res.ok) {
        dispatch(removeBoard(boardId));
    }
}

export const updateBoard = board => async (dispatch) => {
    const res = await csrfFetch(`/api/boards/${board.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(board)
    });

    if (res.ok) {
        const board = await res.json();
        dispatch(receiveBoard(board));
    }
}

// SELECTORS
export const getBoard = boardId => state => {
    return state?.boards ? state.boards[boardId] : null;
}

export const getBoards = state => {
    return state?.boards ? Object.values(state.boards) : [];
}

// REDUCER
const boardsReducer = (state = {}, action) => {

    const newState = { ...state }

    switch (action.type) {
        case RECEIVE_BOARDS:
            return { ...action.boards };
        case RECEIVE_BOARD:
            newState[action.board.id] = action.board
            return newState
        case REMOVE_BOARD:
            delete newState[action.boardId];
            return newState;
        default:
            return state;
    }
}

export default boardsReducer