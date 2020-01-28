import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Limiter } from '../Limiter';

afterEach(cleanup);

describe('Limiter', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Limiter></Limiter>)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});