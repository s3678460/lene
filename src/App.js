import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import RouterURL from './components/routerURL/RouterURL'
import Navbar from './components/layout/Navbar';
import LeftSideBar from './components/layout/LeftSideBar';

const App = () =>
  <Router>
    <div className="wrapper">
      {/* Left Sidebar */}
      <LeftSideBar />
      {/* Page Content  */}
      <div id="content">
        <Navbar />
        <RouterURL />
      </div>
    </div>
  </Router>
export default App;
