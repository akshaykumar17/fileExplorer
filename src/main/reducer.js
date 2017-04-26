import { combineReducers } from 'redux';
import { fileTypeReducers } from '../features/galleryViewer/reducer';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
    file: fileTypeReducers,
    form: formReducer
});

export default reducer;