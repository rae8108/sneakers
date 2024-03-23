import React from "react";
import Nav from "./Nav";
import adidas from "./adidas.avif";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <div class="overlay-container">
        <img src={adidas} alt="adidas-header" className="adidas-header" />
        <h2 id="overlay-h2">MARCH 2024 LIMITED EDITION</h2>
        <a href="/product">
          <button class="overlay-button">EXPLORE COLLECTION</button>
        </a>
      </div>
    </div>
  );
}
