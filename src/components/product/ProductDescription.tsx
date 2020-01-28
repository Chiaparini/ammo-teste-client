import React from 'react'
import { Product } from '../../models/product'
import styled from 'styled-components'
import { colors, sizes } from '../../assets/style/global'

const Name = styled.h3`
  font-size: 12px;
  font-weight: 500;
  margin: 0;

  @media(min-width: ${sizes.sm}) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 10px;
  margin: 0;
  color: ${colors.darkGrey};

  @media(min-width: ${sizes.sm}) {
    font-size: 12px;
  }
`;

const Wrapper = styled.div`
  margin: 0 6px;
`;

export const ProductDescription = ({ product }: { product: Product }) => {
  return (
    <Wrapper>
      <Name>{product.name}</Name>
      <Description>{(!!product.style) && product.style.name} {(!!product.style && !!product.description) && '| •' } {product.description}</Description>
    </Wrapper>
  )
}
  