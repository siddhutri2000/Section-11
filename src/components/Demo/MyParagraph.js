import React from "react";

const MyParagraph = (props) => {
  console.log("myParagraph");
  return <p>{props.children}</p>;
};

export default MyParagraph;
