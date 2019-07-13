import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('The Main App', () => {
  test('It renders with gallery', () => {
    const component = renderer.create(
      <App />
    )

    expect(component.toJSON()).toMatchSnapshot();
  })
})
