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

