import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login'
import './App.css';
import MainPage from './components/MainPage';

const App = () =>
  <Router>
    <Fragment>
      <Route exact path='/' component={MainPage} />
      <section className='container'>
        <Switch>
          <Route exact path='/main' />
        </Switch>
      </section>
    </Fragment>
  </Router>
export default App;
