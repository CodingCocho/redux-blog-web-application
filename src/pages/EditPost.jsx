import './styles/EditPost.css'
import { Navbar } from '../components/Navbar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Link } from 'react-router-dom';
import { postUpdated } from '../utilities/postSlice';

export const EditPost = () => {
  const {postId} = useParams()

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [author, setAuthor] = useState(post.author)

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setAuthor(e.target.value)

  const onSavePostClicked = () => 
  {
    if (title && content && author) 
    {
      dispatch(postUpdated({ id: postId, author, title, content }))
    }
  }

  return (

    <div className="EditPost">
      <Navbar />
      <div className="page">
        <h2>Edit Post</h2>
        <form>
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="What's on your mind?"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={onAuthorChanged}
          />
        </form>
        <Link 
        className='save'
        onClick={onSavePostClicked}
        to={`/posts/${post.id}`}
        >
          Save Post 
        </Link>
      </div>
    </div>
  )
}