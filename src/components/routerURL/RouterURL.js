import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../MainPage";
import Login from "../auth/Login";
import FilterSideBar from '../../components/FilterSideBar/FilterSideBar';

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/discover-page" component={MainPage} />
          <Route exact path = "/filter-bar" component={FilterSideBar}/> 
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    );
  }
}

export default RouterURL;
