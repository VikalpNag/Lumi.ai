"use client";
import useMousePosition from "../../utils/useMousePosition.js";
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";
import "./Mainbar.css";
import { Context } from "../../context/context.jsx";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GrainIcon from "@mui/icons-material/Grain";
import { motion } from "framer-motion";
import Suggestions from "./Suggestions.jsx";

const Mainbar = () => {
  const { x, y } = useMousePosition();
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(false);
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
        <div className="icons">
          {show ? (
            <DarkModeOutlinedIcon onClick={() => setShow(false)} />
          ) : (
            <LightModeOutlinedIcon onClick={() => setShow(true)} />
          )}
          {menu ? (
            <CloseRoundedIcon onClick={() => setMenu(false)} />
          ) : (
            <MenuRoundedIcon onClick={() => setMenu(true)} />
          )}
          {menu && (
            <div className="dropdown-menu">
              <ul>
                <li>Login</li>
                <li>Help</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>What can I help you?</span>
          </p>
        </div>
        <motion.div
          className="circle"
          animate={{ x, y }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        ></motion.div>
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
          <Suggestions />
        ) : (
          <div className="result">
            <div className="result-title">
              <GrainIcon />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              {loading ? (
                <div class="loader"></div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="bottom-info">
            <p>Lumi.ai Designed and Developer by Vikalp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
