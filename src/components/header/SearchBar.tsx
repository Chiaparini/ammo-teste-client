import React, { useContext, FormEvent } from 'react'
import { CatalogContext } from '../../contexts/store';
import styled from 'styled-components';
import { colors } from '../../assets/style/global';

import search from '../../assets/images/search.svg';
import cancel from '../../assets/images/cancel.svg';


const StyledSearch = styled.div`
  position: relative;

  img {
    max-width: 18px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
  }

  input {
    height: 32px;
    line-height: 16px;
    color: ${colors.lightGrey};
    transition: color .2s ease-in-out;
    outline: none;
    
    border: solid 1px;
    border-radius: 50px;
    padding: 4px 36px;
    max-width: 200px;
    
    @media(min-width: 768px) {
      max-width: 100%;
      width: 320px;
    }

    &:focus {
      color: ${colors.darkGrey};
    }

    &::placeholder {
      color: ${colors.lightGrey};
    }
  }
`

const ResetSearch = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  cursor: pointer;

  img {
    max-width: 18px;
  }
`

export const SearchBar = () => {
  const { state, action }: any = useContext(CatalogContext);

  const setQuery = (value: any) => {
    action.setQuery(value);
  }

  const resetSearch = () => {
    action.setQuery("");
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action.setSensitiveParams(1, state.limit);
    action.getProducts();
  }

  return (
    <StyledSearch>
      <img src={search} alt="search icon"/>
      <form action="" onSubmit={handleSubmit}>
        <input placeholder="Buscar um produto" type="text" value={state.query} name="" id="" onChange={e => setQuery(e.target.value)}/>
      </form>
      {!!state.query &&
      <ResetSearch onClick={resetSearch}>
        <img src={cancel} alt="cancel icon" />
      </ResetSearch> }
    </StyledSearch>
  )
}