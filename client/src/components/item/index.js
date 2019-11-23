import React from 'react';
import ItemStyled from './style';
import PhotoIcon from '../photoIcon';

const Item = ({ data }) => {
  const { name, picture } = data;
  return (
    <ItemStyled>
      <PhotoIcon rounded url={picture} /> <p>{name}</p>
    </ItemStyled>
  )
}

export default Item;
