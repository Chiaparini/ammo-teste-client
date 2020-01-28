import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { StoreProvider } from './contexts/store';

const Index = () => (
  <StoreProvider>
    <App></App>
  </StoreProvider>
)

render(<Index />, document.getElementById('root'));
