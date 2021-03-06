import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  pageSize = 9;

  render() {
    return (
      <>
      <Router>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route exact path="/business"><News key="bussiness" pageSize={this.pageSize} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route>
        </Switch>
      </div>
      </Router>
      </>
    )
  }
}

export default App