import React from "react";
import Image from "../../assets/userprofileimage.jpeg";
import "../styles/UserCard.css";


const ContactUserCard = () => {
  return (
    <div className="usercard"> 
      <img src= { Image } />
      <h1>Jordan Walke</h1>
      <h2>React Creator</h2>
      <p>Lorem Ipsem</p>
    </div>
  );
}

export default ContactUserCard;