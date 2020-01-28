import React from 'react'
import { Product } from '../../models/product'
import styled from 'styled-components';
import { colors } from '../../assets/style/global';

const StrikePrice = styled.span`
  color: ${colors.darkGrey};

  span {
    text-decoration: line-through;
  }
`;

const PriceWrapper = styled.div`
  text-align: right;
`;

const Price = styled.span`
  font-weight: 500;
`;

export const ProductPrice = ({ product }: { product: Product }) => {
  
  const hasDiscount = product.discountPrice > 0;
  
  return (
    <PriceWrapper>
      {hasDiscount ? (
        <p>
          <StrikePrice>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</span> por 
          </StrikePrice>
          <Price> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.discountPrice)}</Price>
        </p>
        ): <Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Price> }
    </PriceWrapper>
  )
}
    