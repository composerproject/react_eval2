function PostDetail({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.userId}</p>
    </div>
  );
}

export default PostDetail;
