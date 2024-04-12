import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data;
    }
)

export const addPost = createAsyncThunk(
    'post/addPost',
    async (data) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts/', data)
        return response.data
    }
)

const postSlice = createSlice({
    name: "post",
    initialState: {
        isInitialised : false,
        post: {
            title: '',
            body: '',
            userId: 1
        },
        posts: []
    },
    reducers: {
        setPostTitle(state, action) {
            state.post.title = action.payload
        },
        setPostBody(state, action) {
            state.post.body = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isInitialised = true;
        })
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.posts.push({...action.payload, id: state.posts.length + 1})
            state.post.title = '';
            state.post.body = '';
        })
    }
})

export const {
    setPostTitle,
    setPostBody
} = postSlice.actions;

export default postSlice.reducer;