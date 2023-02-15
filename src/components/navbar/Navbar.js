import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <h1>F&K</h1>
          <span>Technologies</span>
        </div>
        <ul className="navbar__container__list">
          <li className="navbar__container__list__feature">
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li className="navbar__container__list__feature">
            <a
              href="https://www.linkedin.com/in/ffurkan/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Bize Ulaşın</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
