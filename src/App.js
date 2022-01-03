import React from "react";
import Home from "./Components/Home";
import NavBar from "./NavBar";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Scroll from "./Components/Scroll";
const App = () => {
  return (
    <div>
      <div>
        <div className="Navbar">
          <NavBar />
        </div>
        <Scroll>
          <Home />

          <Portfolio />

          <Services />

          <Contact />
        </Scroll>
      </div>
    </div>
  );
};

export default App;
