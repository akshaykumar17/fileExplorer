import { ACTION_TYPE } from './constants';

/*######....
  */
// to fetch the files list with 'async actions'

const getFilesInit = (action) => {
    return {
        type: ACTION_TYPE.FILES_ACTIONS.FETCH_FILES,
        payload: action
    }
}

/*######....
   */
//this action will have all the selected Files in the state '&'
//To trigger the color on 'buttonClick' 

const setSelectedFiles = (action) => {
    return {
        type:ACTION_TYPE.SELECTED_FILE_ACTIONS.SELECTED_FILE,
        payload: action
    }
}

const unSelectFiles = (action) => {
    return {
        type:ACTION_TYPE.SELECTED_FILE_ACTIONS.UNSELECT_FILE,
        payload: action
    }
}

export { getFilesInit, setSelectedFiles, unSelectFiles};