import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage/Homepage'
import Display from './components/Display/Display'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render((
  <Router>
    <div>
      <Route exact path='/' component={Homepage} />
      <Route path='/display' component={Display} />
    </div>
  </Router>
),document.getElementById('root'));
