import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import authReducer from "./slices/authSlice"
import userReducer from "./slices/userSlice"
import cateReducer from "./slices/cateSlice"
import homeReducer from "./slices/homeSlice"
const persistConfig = {
   key: "root", 
   storage,
   whitelist:["authReducer"],
}

const reducers = combineReducers({
    authReducer,
    userReducer,
    cateReducer,
    homeReducer

})

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer