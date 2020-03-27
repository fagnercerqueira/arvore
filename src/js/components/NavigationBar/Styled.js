import styled from 'styled-components';

const NavigationWrapper = styled.View`
  flex: 1;
  height: 50px;
  padding: 14px 17px;
  justify-content: space-between;
  flex-direction: row;
`;

const NavigationBrand = styled.Image`
  width: 122px;
  height: 29px;
  align-self: flex-start;
`;

const SearchButton = styled.TouchableHighlight`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  background: transparent;
`;

const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export {NavigationWrapper, NavigationBrand, SearchButton, SearchIcon}