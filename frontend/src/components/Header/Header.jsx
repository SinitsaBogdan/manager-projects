import React from "react";
import "./Header.scss";

export default function Header(props) {
  return (
    <header className="Header">
      <div className="Header__links">
        <button className="Header__button">Лендинги</button>
        <button className="Header__button">Интернет магазины</button>
        <button className="Header__button">Корпаративные</button>
      </div>
    </header>
  );
}
