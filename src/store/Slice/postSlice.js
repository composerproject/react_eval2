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

// export const deletePost = createAsyncThunk(
//     'post/deletePost',
//     async (data) => {
//         const {status} = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${data}`)
//         return {status, id: data}
//     }
// )

// export const updatePost = createAsyncThunk(
//     'post/updatePost',
//     async (data) => {
//         const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
//         return response.data
//     }
// )

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
        // builder.addCase(deletePost.fulfilled, (state, action) => {
        //     const {status, id} = action.payload
        //     if(status === 200) {
        //         state.posts = state.posts.filter(post => post.id !== id)
        //     }
        // })
        // builder.addCase(updatePost.fulfilled, (state,action) => {
        //     state.posts = state.posts.map(post => post.id === action.payload.id ? action.payload : post)
        // })
    }
})

export const {
    setPostTitle,
    setPostBody,
    togglePostComplete,
    deletePost
} = postSlice.actions;

export default postSlice.reducer;