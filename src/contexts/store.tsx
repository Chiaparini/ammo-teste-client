import React, { useReducer, useEffect } from 'react';
import { Catalog } from '../models/catalog';
import { Actions } from './actions';
import { fetchProducts } from '../services/catalog';

export const CatalogContext = React.createContext({});

const initialState: Catalog = {
  loading: false,
  products: [],
  error: false,
  pages: 1,
  query: '',
  title: 'Lista de Produtos',
  page: 1,
  limit: 8,
  total: 0
};

const catalogReducer = (state: Catalog, action: Actions): any => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_INIT':
      return { ...state, loading: true };
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, products: action.payload.products, pages: action.payload.pages, total: action.payload.total, loading: false, error: false };
    case 'FETCH_PRODUCTS_FAIL':
      return { ...state, error: true, loading: false };
    case 'SET_QUERY':
      return { ...state, query: action.payload.query };
    case 'SET_PAGE_OR_LIMIT':
      return { ...state, limit: action.payload.limit, page: action.payload.page };
    case 'SET_TITLE':
      return { ...state, title: action.payload }
    case 'RESET_PARAMS':
      return { ...initialState };
    default:
      throw new Error();
  }
};

export const useCatalog = () => {
  const [state, dispatch] = useReducer(catalogReducer, initialState);
  const currentUrlParams = new URLSearchParams(window.location.search);

  // get params when page renders 
  useEffect(() => {
    state.page = Number(currentUrlParams.get('page')) || initialState.page;
    state.query = Number(currentUrlParams.get('search')) || initialState.query;
    state.limit = Number(currentUrlParams.get('limit')) || initialState.limit;
  }, []);
  
  useEffect(() => {
    getProducts();

    return () => {};
  }, [state.page, state.limit]);


  const getProducts = async () => {
    dispatch({ type: 'FETCH_PRODUCTS_INIT' });
    try {
      currentUrlParams.set('search', state.query);
      currentUrlParams.set('limit', state.limit);
      currentUrlParams.set('page', state.page);

      // update URL params
      window.history.pushState({page: state.page, search: state.search, limit: state.limit}, '', '?'+currentUrlParams.toString());

      const products = await fetchProducts(state.limit, state.query, state.page);

      dispatch({ type: 'SET_TITLE', payload: state.query });
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });
    } catch {
      dispatch({ type: 'FETCH_PRODUCTS_FAIL' });
    }
  };

  const setQuery = (query: string) => {
    try {
      dispatch({ type: 'SET_QUERY', payload: { query } });
    } catch {
      dispatch({ type: 'RESET_PARAMS' });
    }
  };

  const setSensitiveParams = (page: number, limit: number) => {
    try {
      dispatch({ type: 'SET_PAGE_OR_LIMIT', payload: { page, limit } });
    } catch {
      dispatch({ type: 'RESET_PARAMS' });
    }
  };

  return [state, { getProducts, setQuery, setSensitiveParams }];
}

export const StoreProvider = ({ children }: any) => {
  const [state, action] = useCatalog();

  return (
    <CatalogContext.Provider value={{ state, action }}>
      {children}
    </CatalogContext.Provider>
  )
};