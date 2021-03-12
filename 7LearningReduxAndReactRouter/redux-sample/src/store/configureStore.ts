import { rootReducer } from './AppState';
import {createStore} from 'redux';

const configureStore = () => {
    return createStore(rootReducer, {})
};

export default configureStore;
