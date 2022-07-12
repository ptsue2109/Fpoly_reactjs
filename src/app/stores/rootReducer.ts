import { persistReducer } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import storage from "redux-persist/lib/storage"


const persistConfig = {
   key: "root", 
   storage,
   whitelist:["authReducer"],
}

const reducers = combineReducers({
    authReducer,

})

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer