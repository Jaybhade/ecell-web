import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages

import Presentation from "views/Presentation.js";
import BlogPosts from "views/examples/BlogPosts.js";
import Discover from "views/examples/Discover.js";
import Gallery from "views/examples/Gallery.js";
import Faculty from "views/examples/Faculty.js";
import Student from "views/examples/Student.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/presentation"
        render={props => <Presentation {...props} />}
      />
      <Route path="/gallery" render={props => <Gallery {...props} />} />
      <Route path="/faculty" render={props => <Faculty {...props} />} />
      <Route path="/student" render={props => <Student {...props} />} />
      <Route path="/blog-posts" render={props => <BlogPosts {...props} />} />
      <Route path="/discover" render={props => <Discover {...props} />} />
      <Redirect to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
