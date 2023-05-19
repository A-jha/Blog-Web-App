import BlogList from './BlogList'
import {blogs} from "./data/db"

const Home = () => {
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;