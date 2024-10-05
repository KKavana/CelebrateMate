import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import celebrationGif from "../assets/images/celebration.gif";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Celebratemate!</h1>
      <img src={celebrationGif} alt="Celebration" className="celebration-gif" />
      <p>Let’s help you remember those special moments!</p>
      <Link to="/profile" className="get-started-button">
        Get Started
      </Link>
    </div>
  );
};

export default Homepage;
