import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectApiStatus, selectComments, selectIsCommentInitialised } from "../../../store/selector";
import Loader from "../../Loader";
import CommentListItem from "../CommentListItem";
import { fetchComments } from "../../../store/Slice/commentSlice";
import { useParams } from "react-router-dom";

function CommentList() {

    const {id} = useParams();
    const postId = id;

  const dispatch = useDispatch()
  const comments = useSelector(selectComments)
  const apiStatus = useSelector(selectApiStatus)

  const isCommentsLoading = apiStatus.type === 'fetchComments' && apiStatus.status !== 'fulfilled'

  const isInitialised = useSelector(selectIsCommentInitialised);

  useEffect(() => {
    if(!isInitialised){
        dispatch(fetchComments(postId))        
    }
}, []);


return (
    <>
    <h2>Commentaires</h2>
  {isCommentsLoading ?
      <Loader />
      :
      comments.length > 0 ?
            
          <ul id={"list"}>
              {
                  comments.map(comment => {
                      return (<CommentListItem comment={comment} key={comment.id} />)
                  })
              }
          </ul> :
          <p>No comment</p>}
    </>
)

}

export default CommentList