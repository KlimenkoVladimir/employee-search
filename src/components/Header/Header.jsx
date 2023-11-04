import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__logo">Жилфонд</h1>
      <Link className="header__button">Пользователь</Link>
    </div>
  );
};

export default Header;
