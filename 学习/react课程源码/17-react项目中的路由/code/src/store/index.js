import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./userInfo";
let store = configureStore({
    reducer: {
        userInfo
    }
});
export default store;