import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import root from './sagas/index';
import rootReducer from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import { newsIndexEnter } from './redux/actions/news-actions';
import NewsIndexPageContainer from './redux/containers/news-index-page-container';
import DashboardPage from './pages/dashboard-page';
import App from './App';
import history from './lib/history';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(root);

render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={DashboardPage} />
          <Route path='/news' component={NewsIndexPageContainer} onEnter={store.dispatch(newsIndexEnter())} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
