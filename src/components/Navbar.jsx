import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'; // Import the Link component
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1>Champions.in</h1>
      <main>
        <HashLink to="/#home">
          Home
        </HashLink>
        <Link  to="/series">
          Series
        </Link>
        <Link to="/table">
          Table
        </Link>
        <Link to="/teams">
          Teams
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </main>
    </nav>
  );
};

export default Navbar;
