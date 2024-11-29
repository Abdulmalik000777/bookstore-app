import React from "react";

const LanguageSelector = ({ language, setLanguage }) => {
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language">Select Language and Region:</label>
      <select id="language" value={language} onChange={handleChange}>
        <option value="en_US">English (USA)</option>
        <option value="de_DE">German (Germany)</option>
        <option value="es_ES">Spanish (Spain)</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
