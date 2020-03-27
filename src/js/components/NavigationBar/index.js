import React from 'react';
import {
  NavigationWrapper,
  NavigationBrand,
  SearchButton,
  SearchIcon,
} from './Styled';
const Brand = require('../../../img/brand.png');
const SearchIconImg = require('../../../img/icons/search.png');

const NavigationBar = () => {
  return (
    <NavigationWrapper>
      <NavigationBrand source={Brand} />
      <SearchButton
        onPress={() => {
          console.log('Search');
        }}
        underlayColor="transparent">
        <SearchIcon source={SearchIconImg} />
      </SearchButton>
    </NavigationWrapper>
  );
};

export default NavigationBar;
