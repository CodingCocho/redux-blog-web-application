import './styles/AddPostForm.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {postAdded} from '../utilities/postSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = (event) => 
  {
    event.preventDefault();
    if (title && content) 
    {
      dispatch(postAdded(
        {
          id: nanoid(),
          title,
          content
        }))
      setTitle('')
      setContent('')
    }
  }
  return (
    <div 
    className="AddPostForm"
    >
      <h2>Add a New Post</h2>
      <form>
        <label 
        htmlFor="postTitle"
        >
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label 
        htmlFor="postContent"
        >
          Content:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
        onClick={onSavePostClicked} 
        >
          Save Post
        </button>
      </form>
    </div>
  )
}

