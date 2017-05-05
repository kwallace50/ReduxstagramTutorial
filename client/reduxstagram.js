// dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import css
import css from './styles/style.styl';
// components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import store, { history } from './store';
import App from './components/App';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
