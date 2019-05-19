import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import getFeedback from '../../modules/services/feedback.service';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
      <div className="routerDiv">
      <Router>
      <Route path="/feeling" component={Feeling} />
      <Route path="/understanding" component={Understanding} />
      <Route path="/support" component={Support} />
      <Route path="/comments" component={Comments} />



      </Router>
      </div>
      </div>

    );
  }
}

export default connect(mapReduxStateToProps)(App);