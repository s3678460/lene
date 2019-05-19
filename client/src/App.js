import React , {Fragment} from 'react';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Login from './components/auth/Login'
import './App.css';

const  App = () => 
  <Router>
    <Fragment>

    <Route exact path='/' component={Login} />
    <section className='container'>
        <Switch>
        <Route exact path='/main'  />
        </Switch>
    </section>
    </Fragment>

    </Router>
export default App;
