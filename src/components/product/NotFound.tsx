import React from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/style/global';
import notfound from '../../assets/images/not-found.png';

const Title = styled.h2`
  font-size: 32px;
  color: ${colors.purple};
`;

const Wrapper = styled.div`
  text-align: center;

  img {
    max-width: 270px;
  }
`

export const NotFound = () => {
  return (
    <Wrapper>
      <Title>
        Não encontramos nenhum resultado!
      </Title>
      <img src={notfound} alt="not found"/>
    </Wrapper>
  )
};

