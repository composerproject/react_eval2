function PostDetail({post}) {

  return (
    <>
    <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.userId}</p>
    </>
  )
}

export default PostDetail