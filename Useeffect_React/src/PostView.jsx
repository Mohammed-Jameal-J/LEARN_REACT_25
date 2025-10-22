import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'

const PostView = () => {
    const [posts, setPosts] = useState({});
    const [Post, setPost] = useState(1);

    useEffect(() => {


        // Normal Fetch API
        // fetch(`https://jsonplaceholder.typicode.com/todos/${Post}`)
        // .then((response) => response.json())
        // .then((data) => setPosts(data))


        // Using Axios
        axios.get(`https://jsonplaceholder.typicode.com/posts/${Post}`)
        .then((response) => {
            setPosts(response.data);
        })
        // CLEANUP FUNCTION
        return () => {
            // setPost(1);
            console.log("Cleanup Function Called");
        }
    }, [Post]);
  return (
    <>
    <h1>Api Call</h1>
    <h2>{posts.id}- {posts.title}</h2>
    <p>{posts.body}</p>
    <button onClick={() => setPost(Post + 1)}>Next Post</button>
    </>
  )
}

export default PostView