import {AddPostForm} from '../components/AddPostForm'
import {Navbar} from '../components/Navbar'
import {PostsList} from '../components/PostsList'
import './styles/Home.css'

export const Home = () =>
{
    return (
        <div className="Home">
            <Navbar />
                <section 
                className="page"
                >
                    <AddPostForm />
                    <PostsList />
                </section>
        </div>
    )
}