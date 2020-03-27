import styled from 'styled-components';
import Theme from '../../utils/Theme';

const ScrollViewStyled = styled.ScrollView`
  background-color: ${Theme.blue};
  padding-top: 40px;
`;

const ViewStyled = styled.View`
  flex: 1;
`;

export {ScrollViewStyled, ViewStyled};
