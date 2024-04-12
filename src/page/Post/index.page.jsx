import { useParams } from "react-router-dom";
import { selectPosts } from "../../store/selector";
import { useSelector } from "react-redux";

import CommentList from "../../component/CommentComponent/CommentList";
import AddCommentForm from "../../component/CommentComponent/AddCommentForm";
import PostDetail from "../../component/PostComponent/PostDetail";

function PostPage() {
  const { id } = useParams();

  const posts = useSelector(selectPosts);

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <div>L'article n'a pas été trouvé</div>;
  }

  return (
    <>
      <PostDetail post={post} />

      <CommentList postId={id} />
      <AddCommentForm postId={id} />
    </>
  );
}

export default PostPage;
