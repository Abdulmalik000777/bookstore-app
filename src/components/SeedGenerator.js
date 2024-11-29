import React, { useState } from "react";

const SeedGenerator = ({ seed, setSeed }) => {
  const [tempSeed, setTempSeed] = useState(seed);

  const handleChange = (event) => {
    setTempSeed(event.target.value);
  };

  const generateRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 1000000);
    setSeed(randomSeed);
    setTempSeed(randomSeed);
  };

  const applySeed = () => {
    setSeed(tempSeed);
  };

  return (
    <div>
      <label htmlFor="seed">Seed Value:</label>
      <input type="number" id="seed" value={tempSeed} onChange={handleChange} />
      <button onClick={generateRandomSeed}>🔀 Generate Random Seed</button>
      <button onClick={applySeed}>Apply Seed</button>
    </div>
  );
};

export default SeedGenerator;
