import './styles/App.css';
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home} from '../pages/Home';
import {SinglePostPage} from '../pages/SinglePostPage';
import {EditPost} from '../pages/EditPost';

function App() {
  document.body.classList.add('body-styling');

  return (
    <BrowserRouter>
        <Routes>
            <Route
            element={<Home />}
            path="/"
            >
            </Route>
            <Route
            element={<SinglePostPage />}
            path="/posts/:postId"
            >
            </Route>
            <Route
            element={<EditPost />}
            path="/editPost/:postId"
            >
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
