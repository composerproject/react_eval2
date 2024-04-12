// TASKS

export const selectTaskTitle = state => state.tasks.task.title

export const selectTasks = state => state.tasks.tasks

export const selectTask = state => state.tasks.task

export const selectIsTaskInitialised = state => state.tasks.isInitialised

// API STATUS

export const selectApiStatus = state => state.apiStatus

// POSTS

export const selectPostTitle = state => state.posts.post.title

export const selectPosts = state => state.posts.posts

export const selectPost = state => state.posts.post

export const selectIsPostInitialised = state => state.posts.isInitialised

// COMMENTS

export const selectComments = state => state.comments.comments

export const selectComment = state => state.comments.comment

export const selectIsCommentInitialised = state => state.comments.isInitialised

