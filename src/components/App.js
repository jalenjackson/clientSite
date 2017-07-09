import React, { Component } from 'react';

import Nav from './nav'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Resume from './Resume'
import {Route, Router, BrowserRouter, withRouter } from 'react-router-dom'




export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Nav/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/gallery' component={Gallery}/>
            <Route exact path='/resume' component={Resume}/>
          </div>
      </BrowserRouter>
    );
  }
}

