"use client";
import React, { useState } from "react";
import placeholder from "../../images/placeholder.jpg";

export default function Share({ image }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="share__container">
      <div className="share__btn_cont">
        <button className="share__btn">add space</button>
      </div>
      <div className="share__btn_cont">
        <img className="share__image" src={placeholder} alt="as" />
      </div>
    </div>
  );
}
