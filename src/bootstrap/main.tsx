import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from '@redux-devtools/extension';
import {rootReducer} from '../reducers/rootReducer';
import rootEpic from '../epics/rootEpic';

const history = createBrowserHistory()

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(epicMiddleware, routerMiddleware(history))
  )
);

epicMiddleware.run(rootEpic);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
