import styled from 'styled-components';

const PhotoIconStyled = styled.img`
  width: ${props => props.size || '25px'};
  height: ${props => props.size || '25px'};
  border-radius: ${props => props.rounded ? '100%' : 0};
  position: relative;
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height:100%;
    background:${props > props.background || 'white'};
  }
  &:after {
    content: url('./ico.png');
    display:flex;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
  }
`;

export default PhotoIconStyled;