import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Pagination } from '../Pagination';
import { StoreProvider } from '../../../contexts/store';

afterEach(cleanup);

describe('Pagination', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <StoreProvider>
          <Pagination></Pagination>
        </StoreProvider>
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});