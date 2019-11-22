import React from 'react';
import PhotoIconStyled from './style';

const PhotoIcon = ({ url, size }) => {
  return (
    <PhotoIconStyled
      rounded
      src={url}
      size={size}
    />
  )
}

export default PhotoIcon