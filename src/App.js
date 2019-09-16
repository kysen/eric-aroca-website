import React, { useState } from "react";
import "./components/styles/main.scss";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Switch from "./components/switch";

import Icons from "./helpers/icons";

const App = () => {
  Icons();
  const [currentContent, setTab] = useState("keynote");
  return (
    <div className="App">
      <Navbar setTab={setTab} currentContent={currentContent} />
      <Switch setTab={setTab} currentContent={currentContent} />
      <Footer />
    </div>
  );
};

export default App;
