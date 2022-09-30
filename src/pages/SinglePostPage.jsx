import './styles/SinglePostPage.css'
import { Navbar } from '../components/Navbar';
import {useSelector} from 'react-redux'
import {useParams, Link} from 'react-router-dom'

export const SinglePostPage = () => {
  const {postId} = useParams();
  
  const post = useSelector((state) =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <div
      className="ErrorPage"
      >
        <Navbar />
        <h2>Post not found!</h2>
      </div>
    )
  }

  return (
    <div
    className='SinglePost'
    >
      <Navbar />
      <div className="page">
        <h2>{post.title}</h2>
        <h5>By {post.author}</h5>
        <p>{post.content}</p>
        <Link 
        className="edit"
        to={`/editPost/${postId}`} 
        >
          Edit Post
        </Link>
      </div>
    </div>
  )
}