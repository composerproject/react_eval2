import { useDispatch, useSelector } from "react-redux";
import {
  selectApiStatus,
  selectComment,
  selectIsCommentInitialised,
} from "../../../store/selector/index.js";
import {
  addComment,
  addSyncComment,
  setCommentBody,
  setCommentTitle,
} from "../../../store/Slice/commentSlice.js";

const AddCommentForm = () => {
  const dispatch = useDispatch();

  const comment = useSelector(selectComment);
  const apiStatus = useSelector(selectApiStatus);

  const isInitialised = useSelector(selectIsCommentInitialised);

  const isLoadingAddAction =
    apiStatus.type === "addComment" && apiStatus.status !== "fulfilled";

  const { name, body } = comment;

  const handleTitleChange = (e) => {
    const { value } = e.target;
    dispatch(setCommentTitle(value));
  };

  const handleBodyChange = (e) => {
    const { value } = e.target;
    dispatch(setCommentBody(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || body.trim() === "") {
      return;
    }
    if (!isInitialised) {
      dispatch(addComment(comment));
    } else {
      dispatch(addSyncComment(comment));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a comment</h3>
      <div>
        <input
          onChange={handleTitleChange}
          value={name}
          type="text"
          name="name"
          placeholder="Titre"
        />
      </div>
      <div>
        <textarea
          onChange={handleBodyChange}
          value={body}
          name="body"
          rows="4"
          placeholder="Le contenu de votre commentaire"
        />
      </div>
      <input type={"submit"} disabled={isLoadingAddAction} value={"Add"} />
      {isLoadingAddAction && <p>Processing...</p>}
    </form>
  );
};

export default AddCommentForm;
