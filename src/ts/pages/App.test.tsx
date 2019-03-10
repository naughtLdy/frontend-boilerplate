import * as Enzyme from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from './App';
import configStore from '../store';

import 'jest-enzyme';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('App', () => {
  it('App', () => {
    const store = configStore();

    mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
