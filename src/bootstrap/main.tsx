import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './Layout/components/App/App';
import { createEpicMiddleware } from 'redux-observable';
import { createHashHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import rootEpic from '../epics/rootEpic';

const hashHistory = createHashHistory();

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer(hashHistory),
  composeWithDevTools(
    applyMiddleware(epicMiddleware, routerMiddleware(hashHistory))
  )
);

epicMiddleware.run(rootEpic);

render(
  <Provider store={store}>
    <ConnectedRouter history={hashHistory}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
