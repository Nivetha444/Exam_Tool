import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from './layouts/App';
import {  green, indigo } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Candidate from './layouts/Candidate/Candidate';

const history = createBrowserHistory();
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});
ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Switch>    
          <Route from='/candidate' component={Candidate} />
          <Route from='/' component={App} />
        </Switch>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
