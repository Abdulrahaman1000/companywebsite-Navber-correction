import React from 'react';
import Homepage from './components/pages/Homepage';
import Details from "../src/components/pages/details/Datails"
import { BrowserRouter,Route, Switch, Redirect } from 'react-router-dom';
import Blog from './components/pages/blog/Blog';
import BlogDetails from './components/pages/blogdetails/BlogDetails';


function App() {
  return (
    <div className="font-Quicksand ">

      <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Switch>   
      <Route path="/details/:id" component={Details} />
      <Route path="/details" component={Details} />
      <Route path="/blog" component={Blog} />
      <Route path ="/blogs/:id">
        <BlogDetails/>
      </Route>
      <Redirect to="/" />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
