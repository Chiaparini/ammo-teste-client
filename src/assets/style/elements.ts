import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 8px;

  @media(min-width: 768px) {
    padding: 0 12px;
  }

`