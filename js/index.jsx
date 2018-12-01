import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
var React = require('react');
var Store = require('./store');
var Game = require('./game');

if (localStorage.currentGame) {
  Store.dispatch({ type: 'RESUME_GAME' });
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={Game.App}>
      <IndexRoute component={Game.Index} />
      <Route path="play" component={Game.Game} />
      <Route path="new-game" component={Game.DifficultyDialog} />
    </Route>
  </Router>
  , document.getElementById('app')
);
