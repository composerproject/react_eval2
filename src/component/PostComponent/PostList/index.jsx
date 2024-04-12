import {useDispatch, useSelector} from "react-redux";
import {selectApiStatus, selectIsPostInitialised, selectPosts} from "../../../store/selector/index.js";
import {useEffect} from "react";
import {fetchPosts} from "../../../store/Slice/postSlice.js";
import Loader from "../../Loader/index.jsx";
import PostListItem from "../PostListItem/index.jsx";

const PostList = () => {

    const dispatch = useDispatch()
    
    const posts = useSelector(selectPosts)

    const apiStatus = useSelector(selectApiStatus)

    const isInitialised = useSelector(selectIsPostInitialised);

    const isPostsLoading = apiStatus.type === 'fetchPosts' && apiStatus.status !== 'fulfilled'


    useEffect(() => {
        if(!isInitialised){
            dispatch(fetchPosts())
        }
    }, []);
    return (
        isPostsLoading ?
            <Loader />
            :
            posts.length > 0 ?
                <ul id={"list"}>
                    {
                        posts.map(post => {
                            // return <PostItem post={post} key={post.id} />
                            return <PostListItem post={post} key={post.id} />
                        })
                    }
                </ul> :
                <p className={"noData"}>No post</p>
    )
}

export default PostList