import styled from 'styled-components';

const ItemStyled = styled.div`
  height: 32px;
  width: 100%;
  cursor:pointer;
  display:flex;
  justify-content:flex-start;
  align-items: center;
  padding: 0 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing:border-box;
  &:hover {
    background: #e3fbf6;
  }
  > p {
    margin-left: 10px;
  }
`;

export default ItemStyled;

