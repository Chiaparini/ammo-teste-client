import React from 'react'
import styled, { keyframes } from 'styled-components'
import { StyledCard } from './ProductCard';

const shine = keyframes`
  0% {
    background-position: -90px;
  } 100% {
    background-position: 180px;
  }
`;

const LoadingImages = styled.div`
  display: block;
  height: 90px;
  max-width: 90px;
  background-color: #ccc;
  background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229,229,229,0.8) 40px, #F4F4F4 80px);
  animation: ${shine} 2s infinite linear;
  margin-right: 16px;
`;

const LoadingDescription = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const LoadingText = styled.div`
  display: block;
  height: 20px;
  max-width: 170px;
  background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229,229,229,0.8) 40px, #F4F4F4 80px);
  background-color: #ccc;
  animation: ${shine} 2s infinite linear;
  width: 100%;
  
  &:first-child {
    max-width: 230px;
    margin-bottom: 8px;
  }
`;


export const LoadingCard = () => {

  return (
    <StyledCard>
      <LoadingImages/>
      <LoadingDescription>
        <LoadingText/>
        <LoadingText/>
      </LoadingDescription>
    </StyledCard>
  )
}