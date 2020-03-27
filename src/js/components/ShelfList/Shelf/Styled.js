import styled from 'styled-components';

const ShelfWrapper = styled.ScrollView`
  flex: 1;
  margin: 30px 0;
  padding: ${props =>
    props.backgroundColor !== null ? '25px 0 25px 15px' : '0 0 0 15px'};
  background: ${props =>
    props.backgroundColor !== null ? props.backgroundColor : 'transparent'};
`;

const ShelfTitle = styled.Text`
  color: #2D2D2E;
  font-size: 22px;
  font-weight: bold;
`;

export {ShelfWrapper, ShelfTitle};
