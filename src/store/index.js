import {configureStore} from "@reduxjs/toolkit";
import taskSlice from "./Slice/taskSlice.js";
import apiStatusMiddleware from "./middleware/apiStatusMiddleware.js";
import apiStatusSlice from "./Slice/apiStatusSlice.jsx";
import postSlice from "./Slice/postSlice.js";
import commentSlice from "./Slice/commentSlice.js";

const store = configureStore({
    reducer: {
        tasks: taskSlice,
        apiStatus: apiStatusSlice,
        posts: postSlice,
        comments: commentSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        apiStatusMiddleware
    ])
})

export default store