import React, { useContext } from 'react'
import { CatalogContext } from '../../contexts/store';
import styled from 'styled-components';
import chevronDown from '../../assets/images/chevron-down.svg'
import { colors, sizes } from '../../assets/style/global';

const Wrapper = styled.div`
  position: relative;
  order: 2;

  @media (min-width: ${sizes.md}) {
    order: 1;
  }
`

const Select = styled.select`
  padding: 8px 26px 8px 16px;
  outline: none;
  border-radius: 5px;
  border-color: ${colors.lightGrey};
  color: ${colors.darkGrey};
  background: white;
  appearance: none;
  background: url(${chevronDown}) no-repeat right;
  background-position-x: 153px;
`

export const Limiter = () => {
  
  // eslint-disable-next-line
  const { state, action }: any = useContext(CatalogContext);
  
  const setLimit = (value: string) => {
    action.setSensitiveParams(1, value);
  }
  
  return (
    <Wrapper>
      <Select name="limiter" id="limiter" onChange={e => setLimit(e.target.value)}>
        <option defaultChecked value="8">8 produtos por página</option>
        <option value="16">16 produtos por página</option>
        <option value="32">32 produtos por página</option>
        <option value="64">64 produtos por página</option>
      </Select>
    </Wrapper>
  )
}
  