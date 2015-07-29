// Bootstrapping module
import React from 'react';

require('assets/styles/antd-0.7.3-beta6.css');

import { Router, Route, Link, Redirect } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import About from 'routers/About';
import Inbox from 'routers/Inbox';

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Links>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
        123
      </div>
    )
  }
});

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="inbox" component={Inbox}/>
    </Route>
    <Redirect from="/" to="/inbox" />
  </Router>
), document.body);
