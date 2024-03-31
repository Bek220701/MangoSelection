import React from "react";

const Block = ({ title, subTitle, btn,bg }) => {
  return (
    <div className="top-block">
      <div
        className="block1"
        style={{
          color: "yellow", background:`url(${bg}) no-repeat center/cover`
        }}
      >
        <h1>{title}</h1>
        <h4>{subTitle}</h4>
        <button>{btn}</button>
      </div>
    </div>
  );
};

export default Block;
