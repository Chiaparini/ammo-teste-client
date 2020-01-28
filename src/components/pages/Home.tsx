import React from 'react';
import { Header } from '../header/Header';
import { ProductList } from './containers/ProductList';
import { Footer } from '../footer/Footer';
import { SubHeader } from '../header/SubHeader';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
    font-family: 'Avenir', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

`

export const Home: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <SubHeader />
      <ProductList />
      <Footer />
    </div>
  );
}