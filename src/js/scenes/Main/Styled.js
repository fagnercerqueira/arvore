import styled from 'styled-components';
import Theme from '../../utils/Theme';

const ScrollViewStyled = styled.ScrollView`
  background-color: ${Theme.blue};
`;

const ViewStyled = styled.View`
  flex: 1;
  padding-bottom: 60px;
  background: #ffffff;
`;

export {ScrollViewStyled, ViewStyled};
