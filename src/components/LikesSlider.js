import React from "react";

const LikesSlider = ({ likes, setLikes }) => {
  const handleChange = (event) => {
    setLikes(parseFloat(event.target.value));
  };

  return (
    <div>
      <label htmlFor="likes">Average Likes per Book:</label>
      <input
        type="range"
        id="likes"
        min="0"
        max="10"
        step="0.1"
        value={likes}
        onChange={handleChange}
      />
      <span>{likes}</span>
    </div>
  );
};

export default LikesSlider;
