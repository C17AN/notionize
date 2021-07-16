import React from "react";

interface Props {
  children?: React.ReactChild;
}

const profileContainer: React.FC<Props> = ({ children }) => {
  return <div className="border border-gray-300 p-10 rounded-lg w-[85%]">{children}</div>;
};

export default profileContainer;
