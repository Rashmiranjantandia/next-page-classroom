import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Course from './component/Course';
import Home from "./Router Component/Home";
import Python from "./Router Component/Python";
import NotFound from "./Router Component/NotFound";
import Logo from "./component/common/Logo";

function App() {
  return (
    <div className="App">
      <Logo/>
      <Switch>
      <Route path="/Python" component={Python} />
      <Route path="/Course" component={Course} />
      <Route path="/" component={Home} />
      <Route path="/notFound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}
export default App;