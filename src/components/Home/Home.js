import React from "react";
import "./Home.css";
import homeImage from "../../images/book.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-info-container">
        <h1>Read The Best Books</h1>
        <p>
          Our website contains best book reviews. Here you can get the real
          reviews of books from book readers all around the world. So, our
          website made it easy to find the best books to read. You're in the
          right place. Tell us what titles or genres you've enjoyed in the past,
          and we'll give you surprisingly insightful recommendations. Explore
          and Enjoy.
        </p>
      </div>
      <div className="home-image-container">
        <img src={homeImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
