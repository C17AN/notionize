import React from "react";
import styled from "styled-components";

interface TagProps {
  color?: string;
  key: string;
}

const Tag: React.FC<TagProps> = ({ color = "gray", children }) => {
  return <TagContainer color={color}>{children}</TagContainer>;
};

const TagContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  color: white;
  display: inline-block;
  padding: 5px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
`;

export default Tag;
