import React from "react";
import { suggestions } from "../data";
import "./suggestion.css";

const Suggestions = () => {
  return (
    <div className="suggestions-grid">
      {suggestions.map((item) => (
        <div className="card" key={item.id} onClick={() => {}}>
          <img src={item.img} alt="icon" />
          <p>{item.que}</p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
