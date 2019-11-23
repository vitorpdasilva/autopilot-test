import React from 'react';
import PhotoIconStyled from './style';

const PhotoIcon = ({ url, size, rounded }) => {
  return (
    <PhotoIconStyled
      rounded={rounded}
      src={url}
      size={size}
    />
  )
}

export default PhotoIcon