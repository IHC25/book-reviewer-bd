import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./CustomerReviews.css";

const CustomerReviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="customer-reviews">
      <h2>Customer Reviews: {reviews.length}</h2>
      {reviews.slice(0, 3).map((review) => (
        <ReviewItem reviews={review} key={reviews.id}></ReviewItem>
      ))}
      <Link to="/reviews">
        <button className="review-btn">See All Reviews</button>
      </Link>
    </div>
  );
};

export default CustomerReviews;
