import { useParams } from "react-router-dom"
import { selectPosts } from "../../store/selector"
import { useSelector } from "react-redux";

import CommentList from "../../component/CommentComponent/CommentList";
import AddCommentForm from "../../component/CommentComponent/AddCommentForm";

function PostPage() {
  const {id} = useParams()

  const posts = useSelector(selectPosts);

  const post = posts.find(post => post.id === Number(id))

  if(!post) {
    // return <div>L'article n'a pas été trouvé</div>
  }

  
  // CommentList


  return (
    <>
    {/* TODO PostDetail component */}
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.userId}</p>

      <CommentList postId={id}/>
      <AddCommentForm postId={id} />


    </>
  )
}

export default PostPage