import React, { useContext, useState, useEffect } from 'react'
import { CatalogContext } from '../../contexts/store';
import styled, { css } from 'styled-components';
import { colors, sizes } from '../../assets/style/global';

// Icons
import { ReactComponent as FirstPage } from '../../assets/images/first-page.svg';
import { ReactComponent as LastPage } from '../../assets/images/last-page.svg';
import { ReactComponent as PreviousPage } from '../../assets/images/chevron-left.svg';
import { ReactComponent as NextPage } from '../../assets/images/chevron-right.svg';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  order: 1;

  margin-bottom: 22px;

  @media (min-width: ${sizes.md}) {
    margin: 0;
    order: 2;
  }
`;

const Button = styled.a<{ disabled: boolean, active?: boolean }>`
  display: flex;
  align-items: center;

  padding: 4px;
  border-radius: 5px;
  margin-right: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  
  font-size: 12px;
  line-height: 32px;
  text-align: center;
  
  height: 32px;
  min-width: 22px;

  &:last-child {
    margin-right: 0;
  }

  svg {
    width: 16px;
    height: 16px;
    
    @media (min-width: ${sizes.md}) {
      width: 22px;
      height: 22px;
    }
  }

  @media (min-width: ${sizes.md}) {
    height: 32px;
    font-size: 16px;
    line-height: 22px;
  }

  ${(props: any) => props.disabled && css`
    pointer-events: none;
    cursor: normal;

    svg {
      fill: ${colors.lightGrey};
    }
  `}

  ${(props: any) => props.active && css`
    border: 1px solid ${colors.lightGrey};
    padding: 4px 16px;
  `}
`;

export const Pagination = () => {
  const {state, action}: any = useContext(CatalogContext);

  // state to control the number of showing pages
  const [pager, setPager] = useState({startPage: 0, endPage: 0});
  
  useEffect(() => {
    // set the maximum pages
    if (state.pages <= 6) {
      setPager({
        startPage: 1,
        endPage: state.pages
      });
    } else {
      if (state.page <= 3) {
        setPager({
          startPage: 1,
          endPage: 6
        });
      } else if (state.page + 2 >= state.pages) {
        setPager({
          startPage: state.pages - 5,
          endPage: state.pages
        });
      } else {
        setPager({
          startPage: state.page - 2,
          endPage: state.page + 3
        });
      }
    }
    return () => {};
  }, [state.pages, state.page])


  const goToFirstPage = () => {
    action.setSensitiveParams(1, state.limit);
  }

  const goToLastPage = () => {
    const lastpage = state.pages;
    action.setSensitiveParams(lastpage, state.limit);
  }

  const goToNextPage = () => {
    action.setSensitiveParams(state.page += 1, state.limit);
  }

  const goToPreviousPage = () => {
    action.setSensitiveParams(state.page -= 1, state.limit);
  }

  const shouldRenderPageButton = (currentIndex: number) => {
    if (currentIndex >= pager.startPage && currentIndex <= pager.endPage) {
      return (
        <Button 
            key={currentIndex}
            active={(Number(state.page) === currentIndex)} 
            disabled={(Number(state.page) === currentIndex)} 
            onClick={() => action.setSensitiveParams(currentIndex, state.limit) }>
              {currentIndex}
        </Button>
      )
    }
  }

  if (state.pages === 0) return null;

  return (
    <PaginationWrapper>
      <Button disabled={(state.page === 1)} onClick={goToFirstPage}>
        <FirstPage />
      </Button>
      <Button disabled={(state.page === 1)} onClick={goToPreviousPage}>
        <PreviousPage />
      </Button>
      {[...Array(state.pages)].map((v, index) =>
        shouldRenderPageButton(index + 1)
      )}
      <Button disabled={(state.page === state.pages)} onClick={goToNextPage}>
        <NextPage />
      </Button>
      <Button disabled={(state.page === state.pages)} onClick={goToLastPage}>
        <LastPage />
      </Button>
    </PaginationWrapper>
  )
}