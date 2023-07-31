import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { App } from './App';
import Store, { history } from './redux/store/index';

const store = Store;
ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
