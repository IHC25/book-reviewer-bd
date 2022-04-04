import React from "react";
import useReviews from "../../hooks/useReviews";

const CustomerReviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h2>Customer Reviews: {reviews.length}</h2>
    </div>
  );
};

export default CustomerReviews;
