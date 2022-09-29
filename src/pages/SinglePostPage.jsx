import { useEffect } from 'react';
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

export const SinglePostPage = () => {
  const {postId} = useParams();

  


  



  return (
    <div
    className="SinglePostPage"
    >
      Page
      <div 
      className="post"
      >
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  )
}