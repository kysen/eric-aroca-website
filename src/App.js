import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter } from "react-router-dom";

import "./components/styles/main.scss";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Switcher from "./components/switcher";

import Icons from "./helpers/icons";

// function initializeAnalytics() {

// }

const App = () => {
  Icons();
  // React.useState(() => {
  //   ReactGA.initialize("UA-151614004-1");
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  //   console.log(window.location.pathname);
  // }, [window.location.search]);

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
