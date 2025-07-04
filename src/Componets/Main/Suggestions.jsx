import React from "react";
import { suggestions } from "../data";
import "./suggestion.css";
import { useContext } from "react";
import { Context } from "../../context/context";

const Suggestions = () => {
  const { setInput, onSent } = useContext(Context);

  return (
    <div className="suggestions-grid">
      {suggestions.map((item) => (
        <div
          className="card"
          key={item.id}
          onClick={() => {
            onSent(item.que);
          }}
        >
          <img src={item.img} alt="icon" />
          <p>{item.que}</p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
