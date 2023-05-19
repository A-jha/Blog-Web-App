import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { blogs } from "./data/db";

const BlogDetails = () => {
    const { id } = useParams();
    // const {  error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const [blog, setBlog] = useState({});

    useEffect(()=>{
        setBlog(blogs.find((item)=>item.id == id));
    },[id])
    const handleClickOnDelete = () => {

       let temp  =  blogs.filter((item)=>item.id != id);
        while (blogs.length > 0) {
            blogs.pop();
        }
        while(temp.length>0){
            blogs.push(temp[0]);
            temp.pop();
        }
            history.push('/');
   
    }

    return (
        <div className="blog-details">
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClickOnDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;