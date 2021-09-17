
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  c='aman '
  render() {
    return (
      <div>
        <Navbar/>
        <Router>
          <Switch>
          <Route exact path="/">
          <News country='in' category='general'/>
            </Route>
            <Route exact path="/general">
          <News country='in' category='general'/>
            </Route>
            <Route exact path="/business">
            <News country='in' category='business'/>
            </Route>
            <Route path="/entertainment">
            <News country='in' category='entertainment'/>
            </Route>
            <Route path="/health">
            <News country='in' category='health'/>
            </Route>
            <Route path="/sports">
            <News country='in' category='sports'/>
            </Route>
            <Route path="/technology">
            <News country='in' category='technology'/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

