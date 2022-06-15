import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import pomoReducer from './pomoReducer';


const rootReducer=combineReducers({
    todos,
    visibilityFilter,
    pomoReducer,
});
export default rootReducer;

// export default combineReducers({
//     todos,
//     visibilityFilter,
//     pomoReducer,
// });