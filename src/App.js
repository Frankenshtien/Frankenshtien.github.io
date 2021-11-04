import React from "react";
import NavHeader from "./components/NavHeader";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <NavHeader />
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
      </main>
    </Router>
  );
}

export default App;
