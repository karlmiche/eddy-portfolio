import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/about" className="navlink"><p>about</p></Link>
    <Link to="/" className="navlink"><p>home</p></Link>
    <Link to="/learninlib" className="navlink"><p>learninlib</p></Link>
    <Link to="/chapbook" className="navlink"><p>chapbook</p></Link>
  </div>
);

export default Header;