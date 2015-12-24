import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Home from '../components/Home';
import Parent from '../components/Parent';
import Child from '../components/Child';
import {renderDevTools} from '../utils/devTools';

import {Router, Route} from 'react-router';
import {syncReduxAndRouter, routeReducer} from'redux-simple-router';
import {createHistory, useBasename} from 'history';

const store = configureStore();
const history = useBasename(createHistory)({basename: '/rails_engine_react_example'});
syncReduxAndRouter(history, store);

export default React.createClass({
  render() {
    return (
      <div>

        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Home}>
              <Route path="parent" component={Parent}>
                <Route path="child" component={Child} />
                <Route path="child/:id" component={Child} />
              </Route>
            </Route>
          </Router>
        </Provider>

        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>
    );
  }
});
