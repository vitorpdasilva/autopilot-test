import styled from 'styled-components';

const PhotoIconStyled = styled.img`
  width: ${props => props.size || '25px'};
  height: ${props => props.size || '25px'};
  border-radius: ${props => props.rounded ? '100%' : 0};
`;

export default PhotoIconStyled;