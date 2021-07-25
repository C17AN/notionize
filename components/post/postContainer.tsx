import React from "react";

interface PostContainerProps {
  children: React.ReactChild | React.ReactChildren;
  postList: [];
}

const postContainer: React.FC<PostContainerProps> = ({ children, postList }) => {
  return <div>{children}</div>;
};

export default postContainer;
