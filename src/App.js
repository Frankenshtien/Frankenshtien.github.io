import React, { useState } from "react";
import NavHeader from "./components/NavHeader";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [currentPage, handlePageChange] = useState("AboutMe");

  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <main>
      <NavHeader
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage(currentPage)}
    </main>
  );
}

export default App;
