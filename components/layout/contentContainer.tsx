import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element;
}

const contentContainer: React.FC<Props> = ({ children }) => {
  return <div className="p-[50px]">{children}</div>;
};

export default contentContainer;
