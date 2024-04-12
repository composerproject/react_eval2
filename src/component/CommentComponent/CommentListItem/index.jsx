
const CommentListItem = ({comment}) => {

    return (
        <div className='listItem'>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
            <small>Commentaire écrit par {comment.email}</small>
        </div>
    )
}

export default CommentListItem