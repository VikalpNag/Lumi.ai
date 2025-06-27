import React, { useContext } from "react";
import { assets } from "../../assets/assets.js";
import "./Mainbar.css";
import { Context } from "../../context/context.jsx";

const Mainbar = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Lumi.ai</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>What can I help you?</span>
          </p>
        </div>
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter a Prompt here"
          />
          <div className="icon">
            <img
              onClick={() => onSent(input)}
              src={assets.send_icon}
              alt="send"
            />
          </div>
        </div>
        {!showResult ? (
          <></>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="bottom-info">
            <p>Lumi.ai can make mistakes,so double check it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
