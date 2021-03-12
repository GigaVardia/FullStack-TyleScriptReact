import {combineReducers} from 'redux';
import { UserReducer } from './UserReducer';
import {PostReducer} from './PostReducers';

export const rootReducer = combineReducers({
    user: UserReducer,
    post: PostReducer
})

export type AppState = ReturnType<typeof rootReducer>