import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
