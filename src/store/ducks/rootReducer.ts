import { combineReducers } from 'redux';
import switchs from "./switchs/reducer";
import ceps from "./ceps/reducer";

const rootReducer = combineReducers({
    switchs,
    ceps
})

export default rootReducer