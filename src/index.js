import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Home from './Home.react.js';
import BookList from './BookList.react.js';
import App from './App';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-79927051-1');


import '../styles/styles.scss';

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render((
  <Router history={hashHistory} onUpdate={logPageView}>
    <Route path="/" component={Home} />
    <Route path="/books" component={BookList} />
    <Route path="/books/:bookId" component={App}>
    </Route>
  </Router>
), document.getElementById('root'));
