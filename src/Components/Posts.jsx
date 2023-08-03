import React from "react";
import Post from "./Post.jsx";
import "../styles/Posts.css";

const Posts = () => {
  return (
    <div className="posts-container">
      <h1>Posts</h1> 
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;