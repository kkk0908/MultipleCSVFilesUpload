import React, { Component } from 'react';

import Upload from './components/upload/Upload'
import Singlefile from './components/singleFile/Singlefile'
import './App.css'
import {Route,  BrowserRouter as Router , Switch} from 'react-router-dom'
export default class App extends Component{

  render(){
    return (
      <div className="App">
        <Router>
        <Route exact path="/" component={Upload}/>
        <Route exact path="/singlefile/" component={Singlefile}/>
        </Router>
      </div>
    )
  }
}
