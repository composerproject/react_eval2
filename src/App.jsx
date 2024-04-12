import './App.css'
import {Routes, Route} from "react-router-dom"
import NavBar from './component/NavBar/index.jsx';
import PostsPage from './page/Posts/posts.page.jsx';
import AddPostPage from './page/AddPost/index.page.jsx';
import PostPage from './page/Post/index.page.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
          <Route path={'/'} element={<PostsPage/>}/>
          <Route path={'/add-post'} element={<AddPostPage />}/>
          <Route path={'/post/:id'} element={<PostPage />} />
          <Route path={'*'} element={<div>{"La page demandée n'existe pas"}</div>} />
      </Routes>
    </>
  )
}

export default App