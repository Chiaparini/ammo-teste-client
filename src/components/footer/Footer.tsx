import React from 'react';
import { Pagination } from './Pagination';
import { Limiter } from './Limiter';
import { Container } from '../../assets/style/elements';
import styled from 'styled-components';
import { colors, sizes } from '../../assets/style/global';

const FooterContainer = styled(Container)`
  position: relative;
  max-width: 1180px;
  margin-top: 32px;
  padding: 32px 8px;
  flex-direction: column;

  @media (min-width: ${sizes.md}) {
    flex-direction: row;
    
    padding: 32px 8px;
  }
`

const Border = styled.hr`
  position: absolute;
  width: calc(100% - 16px);
  padding: 0 8px;
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: 1px solid ${colors.lightGrey};
  top: 0;
  margin: 0;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <Border/>
      <Limiter/>
      <Pagination/>
    </FooterContainer>
  )
}
