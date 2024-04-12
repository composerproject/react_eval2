import {configureStore} from "@reduxjs/toolkit";
import apiStatusMiddleware from "./middleware/apiStatusMiddleware.js";
import apiStatusSlice from "./Slice/apiStatusSlice.jsx";
import postSlice from "./Slice/postSlice.js";
import commentSlice from "./Slice/commentSlice.js";

const store = configureStore({
    reducer: {
        apiStatus: apiStatusSlice,
        posts: postSlice,
        comments: commentSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        apiStatusMiddleware
    ])
})

export default store