import React, { useContext } from 'react'
import { CatalogContext } from '../../contexts/store';
import styled from 'styled-components';
import { Container } from '../../assets/style/elements';
import { colors, sizes } from '../../assets/style/global';


const StyledSubHeader = styled.div`
  background-color: #eeedf1;
  border-bottom: 1px solid #dbdbe2;
`
const Title = styled.h1`
  font-weight: 100;
  font-size: 32px;
  color: ${colors.purple};
  margin: 16px 0;

  @media (min-width: ${sizes.md}) {
    font-size: 42px;
    margin: 24px 0;
  }
`

export const SubHeader = () => {
  const { state }: any = useContext(CatalogContext);
  return (
    <StyledSubHeader>
      <Container>
        <Title>
          {state.title ? state.title : 'Lista de produtos'}
        </Title>
      </Container>
    </StyledSubHeader>
  )
}

