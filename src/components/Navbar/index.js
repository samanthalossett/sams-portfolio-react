import React from "react";
import "./style.css";

function Nav() {
  return (
      <div className="container">
    <nav className="navBar">
    <div className="navBar-Links">
      | Samantha Lossett |
      </div>
      <a className="navbar-brand" href="/mywork.js">
       My Work
      </a>
      <a className="navbar-brand" href="/about.js">
       My Story
      </a>
      <a className="navbar-brand" href="/contact.js">
       Contact Info
      </a>
     
    </nav>
    </div>
  );
}

export default Nav;