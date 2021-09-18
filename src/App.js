
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
  apikey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div> <Navbar/>
        <Router>
          <Switch>
          <Route exact path="/">
          <News country='in' apikey={this.apikey} category='general'/>
            </Route>
            <Route exact path="/general">
          <News country='in' apikey={this.apikey} category='general'/>
            </Route>
            <Route exact path="/business">
            <News country='in' apikey={this.apikey} category='business'/>
            </Route>
            <Route path="/entertainment">
            <News country='in' apikey={this.apikey} category='entertainment'/>
            </Route>
            <Route path="/health">
            <News country='in' apikey={this.apikey} category='health'/>
            </Route>
            <Route path="/sports">
            <News country='in' apikey={this.apikey} category='sports'/>
            </Route>
            <Route path="/technology">
            <News country='in' apikey={this.apikey} category='technology'/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

