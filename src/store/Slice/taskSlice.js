import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchTodos = createAsyncThunk(
    'task/fetchTodos',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
        return response.data;
    }
)

export const addTodo = createAsyncThunk(
    'task/addTodo',
    async (data) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos/', data)
        return response.data
    }
)

export const deleteTodo = createAsyncThunk(
    'task/deleteTodo',
    async (data) => {
        const {status} = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${data}`)
        return {status, id: data}
    }
)

export const updateTodo = createAsyncThunk(
    'task/updateTodo',
    async (data) => {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`, data)
        return response.data
    }
)

const taskSlice = createSlice({
    name: "task",
    initialState: {
        isInitialised : false,
        task: {
            title: '',
            userId: 1,
            completed: false
        },
        tasks: []
    },
    reducers: {
        setTaskTitle(state, action) {
            state.task.title = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.tasks = action.payload;
            state.isInitialised = true;
        })
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.tasks.unshift({...action.payload, id: state.tasks.length + 1})
            state.task.title = ''
        })
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            const {status, id} = action.payload
            if(status === 200) {
                state.tasks = state.tasks.filter(task => task.id !== id)
            }
        })
        builder.addCase(updateTodo.fulfilled, (state,action) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
        })
    }
})

export const {
    setTaskTitle,
    toggleTaskComplete,
    deleteTask
} = taskSlice.actions;

export default taskSlice.reducer;