import React, { useEffect } from "react";
import "./App.css";
import Layout from ".//components/Header";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import { setPosts } from "./app/Slices/blog";
import { useAppDispatch } from "./app/hooks";
import { get } from "idb-keyval";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getPosts = async () => {
      get("posts").then((value) => {
        const posts = JSON.parse(value) || [];
        dispatch(setPosts(posts));
      });
    };
    getPosts();
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Layout>
          <div></div>
        </Layout>
        <Container>
          <Switch>
            <Route exact path="/blog_post/">
              <BlogList />
            </Route>
            <Route exact path="/blog_post/blog-details/:blogId">
              <BlogDetails />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
