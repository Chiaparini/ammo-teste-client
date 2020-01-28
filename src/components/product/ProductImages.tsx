import React from 'react'
import { Image } from '../../models/product'; 
import styled from 'styled-components';
import { sizes } from '../../assets/style/global';

const StyledImage = styled.li`
  display: inline-block;
  margin-right: 4px;

  img {
    max-width: 75px;

    @media (min-width: ${sizes.sm}) {
      max-width: 90px;
    }
  }
`;

const ImageList = styled.ul`
  display: flex;
  max-width: 100px;
  min-width: 100px;
  overflow-x: scroll;

  @media (min-width: ${sizes.md}) {
    display: block;
    max-width: 100%;
    overflow-x: auto;
  }
`;

export const ProductImages = ({images}: {images: Array<Image>}) => {
  
  let imagesArray: any = [];
  
  if (!!images) {
    imagesArray = images.map((el: Image) => {
      return (
        <StyledImage key={el.id}>
          <img src={el.uri} alt=""/>
        </StyledImage>
        )
      });
  }
    
  return (
    <div>
      <ImageList>
        {imagesArray}
      </ImageList>
    </div>
  )
}
    