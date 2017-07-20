import React, { Component } from 'react';
import Vision from './Vision'
import Home from './Home'
import Personnel from './Personnel'
import News from './News'
import Sponsors from './Sponsors'
import Contact from './Contact'
import {Route, Router, BrowserRouter, withRouter } from 'react-router-dom'




export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/vision' component={Vision}/>
            <Route exact path='/personnel' component={Personnel}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/sponsors' component={Sponsors}/>
            <Route exact path='/contact' component={Contact}/>
          </div>
      </BrowserRouter>
    );
  }
}

