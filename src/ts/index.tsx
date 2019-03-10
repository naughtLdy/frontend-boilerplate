import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import App from './pages/App';
import configureStore from './store';

createGlobalStyle`
  body {
    display: flex;
    margin: 0;
    padding: 0;
  }
  #content {
    width: 100%;
  }
`;

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content') as HTMLElement
);
