/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import ModalWindow from '../src/components/ModalWindow';

import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import store from '../src/redux/store/store';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders App correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Test redux', () => {
  test('render ModalWindow', () => {
    const component = (
      <Provider store={store}>
        <ModalWindow fields={['avatar', 'first_name', 'last_name', 'email']} />
      </Provider>
    );
    const tree = render(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
