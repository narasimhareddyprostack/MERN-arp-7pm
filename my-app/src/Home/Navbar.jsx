import React from "react";
let Navbar = () => {
  let loginName = "Narasimha ";
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> React - Web Page</a>
        <ul className="navbar-nav">
          <li className="nav-item"> Home</li>
        </ul>
        {loginName}
      </nav>
    </>
  );
};

export default Navbar;
