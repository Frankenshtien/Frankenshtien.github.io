import React from "react";
import NavHeader from "./components/NavHeader";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <NavHeader />
      <Router>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} component={AboutMe} />
          <Route
            path={process.env.PUBLIC_URL + "/portfolio"}
            component={Portfolio}
          />
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            component={Contact}
          />
          <Route path={process.env.PUBLIC_URL + "/resume"} component={Resume} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
