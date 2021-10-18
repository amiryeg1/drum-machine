import {configureStore} from "@reduxjs/toolkit"
import audioStringReducer from "./audio-string-slice"
const store = configureStore({
    reducer: {
        audio: audioStringReducer
    }
})

export default store