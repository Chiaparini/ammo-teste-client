import React from 'react';
import { Header } from './components/header/Header';
import { ProductList } from './components/product/ProductList';
import { Footer } from './components/footer/Footer';
import { SubHeader } from './components/header/SubHeader';

import './App.css';

export const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <SubHeader />
      <ProductList />
      <Footer />
    </div>
  );
}