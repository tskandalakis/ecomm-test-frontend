import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Loading from "./Components/Loading";
import NavMenu from "./Components/NavMenu";

const Home = React.lazy(() => import("./Pages/Home"));
const Products = React.lazy(() => import("./Pages/Products"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const Login = React.lazy(() => import("./Pages/Login"));
const Account = React.lazy(() => import("./Pages/Account"));
const Orders = React.lazy(() => import("./Pages/Orders"));
const Signout = React.lazy(() => import("./Components/Signout"));
const Signup = React.lazy(() => import("./Pages/Signup"));

export default class Router extends React.Component{
  render() {
    return(
      <BrowserRouter>
        <NavMenu />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signout">
              <Signout />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </React.Suspense>
    </BrowserRouter>
    );
  }
}