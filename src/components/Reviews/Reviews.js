import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="reviews-container">
      <h2>Our Reader's Reviews and Ratings</h2>
      {reviews.map((review) => (
        <ReviewItem reviews={review} key={reviews.id}></ReviewItem>
      ))}
    </div>
  );
};

export default Reviews;
