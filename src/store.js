import {combineReducers, createStore} from 'redux';
import {reducer as index} from './index/';

const reducer = combineReducers({
    index
})
const store = createStore(reducer);
export default store;