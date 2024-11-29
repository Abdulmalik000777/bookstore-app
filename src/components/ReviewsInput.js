import React from "react";

const ReviewsInput = ({ reviews, setReviews }) => {
  const handleChange = (event) => {
    setReviews(parseFloat(event.target.value));
  };

  return (
    <div>
      <label htmlFor="reviews">Average Reviews per Book:</label>
      <input
        type="number"
        id="reviews"
        min="0"
        step="0.1"
        value={reviews}
        onChange={handleChange}
      />
    </div>
  );
};

export default ReviewsInput;
