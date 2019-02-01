import React from "react";
import "./Header.css";

const Header = ({ user }) => {
  const { name, status } = user;
  return (
    <header className="Header">
      {/* <a href="https://github.com/oliver-gomes/react-skypey" className="github">
        <i className="fab fa-github" />
      </a> */}
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </header>
  );
};

export default Header;
