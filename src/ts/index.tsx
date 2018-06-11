import * as React from 'react';
import * as ReactDom from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './containerComponents/App';

injectGlobal`
  body {
    display: flex;
    margin: 0;
    padding: 0;
  }
`;

ReactDom.render(
    <App />,
    document.getElementById('content') as HTMLElement
);
