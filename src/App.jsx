import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile.jsx"
import Posts from "./Components/Posts.jsx"
import Contacts from "./Components/Contacts.jsx";
import "./index.css";



function App() {
  return (
    <>
      <NavBar />
    <div className="container">
      <div classname="posts">
        <UserProfile />
        <Posts />
      </div>
      <Contacts />
    </div>    
   </>
  );
}

export default App;
