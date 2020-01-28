import React, { useContext } from 'react'
import { CatalogContext } from '../../../contexts/store';
import { ProductCard } from '../subcomponents/product/ProductCard';
import styled from 'styled-components';
import { colors } from '../../../assets/style/global';
import { LoadingCard } from '../subcomponents/product/LoadingCard';
import { NotFound } from '../subcomponents/product/NotFound';


const StyledProduct = styled.li`
  border: 1px solid ${colors.lightGrey};
  border-bottom: none;

  &:last-child {
    border-bottom: 1px solid ${colors.lightGrey};
  }
`;

const StyledList = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 8px;
`;

const Total = styled.p`
  display: inline-block;
  line-height: 28px;
  text-transform: uppercase;
  border-bottom: 2px solid #dfbe7f;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.darkGrey};
  margin: 26px 0;
`;

export const ProductList = () => {
  const { state }: any = useContext(CatalogContext);

  const products = state.products.map((p: any) => 
    <StyledProduct key={p.id}>
      <ProductCard product={p}></ProductCard>
    </StyledProduct>
  )


  if (!state.products.length) {
    return (
      <StyledList>
        <NotFound/>
      </StyledList>
    )
  }

  return (
    <StyledList>
      <Total>{state.total} produto{(state.total === 1 ? '' : 's')} encontrado{(state.total === 1 ? '' : 's')}</Total>

      {(state.loading && !products.length) && 
        <ul>
          <StyledProduct>
            <LoadingCard />
          </StyledProduct>
          <StyledProduct>
            <LoadingCard />
          </StyledProduct>
          <StyledProduct>
            <LoadingCard />
          </StyledProduct>
        </ul>
      }

      {!!products.length && 
      <ul>
        {products}
      </ul>}
    </StyledList>
  )
}
