import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import CharacterInfo from '../components/CharacterInfo';
import store from '../redux/store';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><CharacterInfo /></Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
