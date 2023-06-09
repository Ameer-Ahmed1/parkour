import React from "react";

import logo from "../images/logo.jpeg";

export default function Logo() {
  return (
    <div className="logo__container">
      <img className="logo__img" src={logo} alt="" />
    </div>
  );
}
