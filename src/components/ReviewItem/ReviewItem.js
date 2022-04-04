import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ reviews }) => {
  const { name, review, ratings } = reviews;
  return (
    <div className="review-container">
      <h4>{name}</h4>
      <p>{review}</p>
      <h5>Rating: {ratings}</h5>
    </div>
  );
};

export default ReviewItem;
