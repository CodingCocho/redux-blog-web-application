import { createSlice } from '@reduxjs/toolkit'

const initialState = 
[
    { id: '1', author: 'Nathan', title: 'First Post!', content: 'The words hadn\'t flowed from his fingers for the past few weeks. He never imagined he\'d find himself with writer\'s block, but here he sat with a blank screen in front of him. That blank screen taunting him day after day had started to play with his mind. He didn\'t understand why he couldn\'t even type a single word, just one to begin the process and build from there. And yet, he already knew that the eight hours he was prepared to sit in front of his computer today would end with the screen remaining blank.' },
    { id: '2', author: 'Pedro', title: 'Second Post', content: 'Rhonda prided herself on always taking the path less traveled. She\'d decided to do this at an early age and had continued to do so throughout her entire life. It was a point of pride and she would explain to anyone who would listen that doing so was something that she\'d made great efforts to always do. She\'d never questioned this decision until her five-year-old niece asked her, \"So, is this why your life has been so difficult?\" and Rhonda didn\'t have an answer for her.' }
]

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers: {
            postAdded(state, action) 
            {
                state.push(action.payload)
            },
            postUpdated(state, action) 
            {
                const { id, author, title, content } = action.payload
                const existingPost = state.find(post => post.id === id)
                if (existingPost) 
                {
                    existingPost.author = author;
                    existingPost.title = title;
                    existingPost.content = content;
                }
            }
        }
    })

export const {postAdded, postUpdated} = postsSlice.actions;

export default postsSlice.reducer;