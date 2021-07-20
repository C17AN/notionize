import React from "react";

interface Props {}

const footer = (props: Props) => {
  return (
    <footer className="flex flex-col justify-center align-top h-24 p-8 mt-[5rem] bg-gray-50 bottom-0 right-0 left-0">
      <p className="text-gray-400 text-sm">@Notionise, All rights reserved.</p>
    </footer>
  );
};

export default footer;
