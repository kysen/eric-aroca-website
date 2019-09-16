// Banner tab(home tab?): video download,
// Delete: {
// Quote under,
// Topics tab Buy the book(going to be moved to 3 column part),
// Training tab(3 column part)
// }
// Add pics to gallery
// About me as separate tab

// just finished making logos now time to add them to project
// make each logo a clickable link
// make social media links work
// create footer

import React, { useState } from "react";
import "./components/styles/main.scss";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Switch from "./components/switch";

import Icons from "./helpers/icons";

const App = () => {
  Icons();
  const [currentContent, setTab] = useState("home");
  return (
    <div className="App">
      <Navbar setTab={setTab} currentContent={currentContent} />
      <Switch setTab={setTab} currentContent={currentContent} />
      <Footer />
    </div>
  );
};

export default App;
