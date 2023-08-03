import React from 'react';
import "../styles/NavBar.css"

const NavBar = () => {
  return (
      <div>
        <ul>
          <li>
            <a href="#">What is Pursuit?</a>
          </li>
          <li>
            <a href="#">Create an account</a>
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
        </ul>
      </div>
  );
}

export default NavBar;