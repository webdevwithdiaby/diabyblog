import React from "react";
import "./style.scss";
function Button({ children, Icon, variant, size }) {
  return (
    <button
      className={`btn ${variant && `btn--${variant}`} ${
        size && `btn--${size} }`
      } `}
    >
      {children}
      {Icon && <Icon className="chevron" />}
    </button>
  );
}

export default Button;
