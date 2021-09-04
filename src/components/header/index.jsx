import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import "./style.scss";

function Header() {
  return (
    <header className="header">
      <div className="flex a-center jc-space-between">
        <Logo />
        <nav className="bg-dark">
          <ul className="flex jc-space-around" jc>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
