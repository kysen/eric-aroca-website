import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./components/styles/main.scss";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Switcher from "./components/switcher";

import Icons from "./helpers/icons";

const App = () => {
  Icons();
  // const [currentContent, setTab] = useState("home");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switcher />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
