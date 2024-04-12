// path: postList/src/component/Form/index.jsx
// import "./form.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectApiStatus, selectPost} from "../../../store/selector/index.js";
import {addPost, setPostTitle, setPostBody} from "../../../store/Slice/postSlice.js";


const AddPostForm = () => {

    const dispatch = useDispatch()

    const post = useSelector(selectPost)
    const apiStatus = useSelector(selectApiStatus)

    const isLoadingAddAction = apiStatus.type === 'addPost' && apiStatus.status !== 'fulfilled'


    const {title, body} = post

    const handleTitleChange = (e) => {
        const {value} = e.target
        dispatch(setPostTitle(value))
    }

    const handleBodyChange = (e) => {
        const {value} = e.target
        dispatch(setPostBody(value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === '' || body.trim() === '') {
            return
        }
        dispatch(addPost(post))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <input onChange={handleTitleChange} value={title} type="text" name="title" placeholder="Titre" />
            </div>
            <div>
            <textarea
                onChange={handleBodyChange}
                value={body}
                name="body"
                rows="4"
                placeholder="Le contenu de votre post"
            />   
            </div>         
            <input type={"submit"} disabled={isLoadingAddAction} value={'Add'}/>
            {
                isLoadingAddAction && <p>Chargement...</p>
            }
        </form>
    )
}

export default AddPostForm