import React from "react";

import "../../App.scss";

type props = {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  small?: boolean;
};

const Button = ({
  children,
  primary = true,
  small = false,
  ...props
}: props) => {
  const { className } = props;
  return (
    <button
      {...props}
      type="button"
      className={`custom-button ${primary && "primary"} ${className || ""}`}
      style={{
        width: small ? "70%" : "100%",
        padding: !small ? "15px 12px" : "12px 9px",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
