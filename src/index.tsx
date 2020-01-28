import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/pages/Home';
import { StoreProvider } from './contexts/store';

const Index = () => (
  <StoreProvider>
    <Home />
  </StoreProvider>
)

render(<Index />, document.getElementById('root'));
