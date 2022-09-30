import './styles/PostList.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <div 
    className="component" 
    key={post.id}
    >
      <h3>{post.title}</h3>
      <h5>By {post.author}</h5>
      <p>{post.content}</p>
      <Link
      className="post-link"
      to={`/posts/${post.id}`}
      >
        View Post
      </Link>
    </div>
  ))

  return (
    <div 
    className="PostList"
    >
      {renderedPosts}
    </div>
  )
}