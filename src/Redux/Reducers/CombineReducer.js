import currentUserReducer from "../Slices/CurrentUser";

const rootReducer = combineReducers({
    currentUser:currentUserReducer,
});

export default rootReducer;
