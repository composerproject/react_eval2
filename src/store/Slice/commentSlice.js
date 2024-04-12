import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchComments = createAsyncThunk(
    'comment/fetchComments',
    async (postId) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        return response.data;
    }
)

export const addComment = createAsyncThunk(
    'comment/addComment',
    async (data) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/comments', data)
        return response.data
    }
)

// export const deleteComment = createAsyncThunk(
//     'comment/deleteComment',
//     async (data) => {
//         const {status} = await axios.delete(`https://jsonplaceholder.typicode.com/comments/${data}`)
//         return {status, id: data}
//     }
// )

// export const updateComment = createAsyncThunk(
//     'comment/updateComment',
//     async (data) => {
//         const response = await axios.put(`https://jsonplaceholder.typicode.com/comments/${data.id}`, data)
//         return response.data
//     }
// )

const commentSlice = createSlice({
    name: "comment",
    initialState: {
        isInitialised : false,
        comment: {
            name: '',
            body: '',
            email: 'user1@user1.com'
        },
        comments: []
    },
    reducers: {
        setCommentTitle(state, action) {
            state.comment.name = action.payload
        },
        setCommentBody(state, action) {
            state.comment.body = action.payload
        },
        addSyncComment(state,action) {
            state.comments.push(action.payload);
            state.comment.name = '';
            state.comment.body = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        })
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.comments.push({...action.payload, id: state.comments.length + 1})
            state.comment.name = '';
            state.comment.body = '';
            state.isInitialised = true;
        })
        // builder.addCase(deleteComment.fulfilled, (state, action) => {
        //     const {status, id} = action.payload
        //     if(status === 200) {
        //         state.comments = state.comments.filter(comment => comment.id !== id)
        //     }
        // })
        // builder.addCase(updateComment.fulfilled, (state,action) => {
        //     state.comments = state.comments.map(comment => comment.id === action.payload.id ? action.payload : comment)
        // })
    }
})

export const {
    setCommentTitle,
    setCommentBody,
    toggleCommentComplete,
    deleteComment,
    addSyncComment
} = commentSlice.actions;

export default commentSlice.reducer;