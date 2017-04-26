import { ACTION_TYPE } from './constants';
import { combineReducers } from 'redux';

const INITIAL_STATE = [];

function fileReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPE.FILES_ACTIONS.ADD_FETCH:
            return [...state, action.response];
        default:
            return state;
    }
}

function selectedFileReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPE.SELECTED_FILE_ACTIONS.SELECTED_FILE:
            return [...state, action.payload];
        case ACTION_TYPE.SELECTED_FILE_ACTIONS.UNSELECT_FILE:
            return state.filter(id => id !== action.payload);
        default:
            return state;
    }
}


export const fileTypeReducers = combineReducers({
    allfiles: fileReducer,
    selectedFile: selectedFileReducer
});