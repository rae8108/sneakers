import React from "react";
import "./Nav.css";
import adidasLogo from "./adidaslogo.jpeg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <img
        style={{
          marginTop: "-3px",
        }}
        src={adidasLogo}
        alt="adidas-logo"
        className="adidas-logo"
        width="140px"
      />
      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <br />
        <Link className="nav-link" to="/product">
          Products
        </Link>
        <br />
        <Link className="nav-link" to="/basket">
          Basket
        </Link>
      </div>
    </div>
  );
}
