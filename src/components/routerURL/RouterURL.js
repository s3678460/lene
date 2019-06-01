import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../MainPage";
import Login from "../auth/Login";
import FilterSideBar from '../../components/FilterSideBar/FilterSideBar';
import DiscoverPage from "../pages/DiscoverPage";
import DetailPage from "../pages/DetailPage";

class RouterURL extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/discover-page" component={DiscoverPage} />
        <Route exact path="/detail" component={DetailPage} />
        <Route exact path="/filter-bar" component={FilterSideBar} />
        <Route exact path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    );
  }
}

export default RouterURL;
