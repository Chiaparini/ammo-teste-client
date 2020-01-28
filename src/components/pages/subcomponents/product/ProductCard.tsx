import React from 'react'
import { Product } from '../../../../models/product';
import { ProductImages } from './ProductImages';
import { ProductDescription } from './ProductDescription';
import { ProductPrice } from './ProductPrice';

import { sizes } from '../../../../assets/style/global';

import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;

  > div:nth-child(1) {
    flex-basis: 35%;

    @media (min-width: ${sizes.sm}) {
      flex-basis: 15%
    }

    @media (min-width: ${sizes.md}) {
      flex-basis: 35%
    }
  }

  > div:nth-child(2) {
    flex-grow: 1;
  }

  > div:nth-child(3) {
    flex-basis: 20%;
  }
`

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <StyledCard>
      <ProductImages images={product.pictures}/>
      <ProductDescription product={product} />
      <ProductPrice product={product} />
    </StyledCard>
  )
}