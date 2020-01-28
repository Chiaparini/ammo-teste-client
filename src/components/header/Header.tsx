import React from 'react'
import logo from '../../assets/images/logo.svg';
import logoSmall from '../../assets/images/logo-sm.svg';
import { SearchBar } from './SearchBar';
import styled from 'styled-components';
import { colors } from '../../assets/style/global';
import { Container } from '../../assets/style/elements';

const Logo = styled.img`
  max-width: 140px; 

  @media(max-width: 768px) {
    display: none;
  }
`

const LogoMobile = styled.img`
  max-width: 70px;    

  @media(min-width: 768px) {
    display: none;
  }
`

const StyledHeader = styled.div`
  display: flex;

  min-height: 48px;

  border-bottom: 1px solid ${colors.lightGrey};
  box-shadow: 0px 2px 5px 0px #eee;

  @media(min-width: 768px) {
    min-height: 62px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo src={logo} alt="Logo" />
        <LogoMobile src={logoSmall} alt="Logo" />
        <SearchBar/>
      </Container>
    </StyledHeader>
  )
}