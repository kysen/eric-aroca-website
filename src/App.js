// Banner tab(home tab?): video download,
// Delete: {
// Quote under,
// Topics tab Buy the book(going to be moved to 3 column part),
// Training tab(3 column part)
// }
// Add pics to gallery
// About me as separate tab

import React from "react";
import "./components/styles/main.scss";

import Navbar from "./components/navbar";

import Icons from "./helpers/icons";

function App() {
  Icons();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
