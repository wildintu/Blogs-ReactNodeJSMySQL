import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blogs from "./Blogs";
import Blog from "./Blog";
import Forms from "./Forms";
import Detail from "./Detail"

const App: React.FC<IAppProps> = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Forms" component={ Forms } />
        <Route exact path="/Blogs/:id/details" component={ Detail } />
        <Route exact path="/Blogs/:id/admin" component={ Blog } />
        <Route path="/" component={ Blogs } />
      </Switch>
    </Router>
  );
};

export interface IAppProps {}

// export interface IAppState {}

export default App;
