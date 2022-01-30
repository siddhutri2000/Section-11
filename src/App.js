import React, { useState } from "react";
import "./App.css";
import Button from "../src/components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("app running");

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}> Toggle paragraph</Button>
    </div>
  );
}

export default App;
