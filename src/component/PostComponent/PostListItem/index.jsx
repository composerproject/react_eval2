import { useNavigate } from "react-router-dom";

const PostListItem = ({ post }) => {
  const navigate = useNavigate();

  const handleNavigate = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="listItem">
      <p>{post.id}</p>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <small> Ecrit par Rimi Natsukawa</small>
      <p>
        <button onClick={() => handleNavigate(post.id)}>
          Voir la page du post
        </button>
      </p>
    </div>
  );
};

export default PostListItem;
