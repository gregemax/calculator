import { configureStore } from "@reduxjs/toolkit";
import slice from "./config";


const store=configureStore({
    reducer:{
        canculator:slice.reducer,

    }
})

export default store