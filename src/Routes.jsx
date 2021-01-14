import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
