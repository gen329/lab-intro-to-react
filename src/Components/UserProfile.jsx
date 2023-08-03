import React from 'react';
import userprofileimage from '../../assets/userprofileimage.jpeg'
import UserProfileInfo from './UserProfileInfo';
import "../styles/UserProfile.css"

const UserProfile = () => {
  return (
    <div className="container">
      <img src= { userprofileimage }/>
      <UserProfileInfo />
    </div>
  );
}

export default UserProfile;
