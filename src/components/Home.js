import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const firebrick = { color: "firebrick"}
  return <div id="home">
    <h1 style={firebrick}>{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
