import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import CharacterList from '../components/CharacterList';
import store from '../redux/store';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><CharacterList /></Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
