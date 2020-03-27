import styled from 'styled-components';

const ShelfWrapper = styled.View`
  flex: 1;
  margin: 15px 0;
  padding: ${props =>
    props.backgroundColor !== null ? '20px 15px' : '0 15px'};
  background: ${props =>
    props.backgroundColor !== null ? props.backgroundColor : 'transparent'};
`;

export {ShelfWrapper};
