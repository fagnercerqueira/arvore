/**
 * Challenge Árvore Educação
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import Theme from '../../utils/Theme';
import ShelfList from '../../components/ShelfList';
import {ScrollViewStyled, ViewStyled} from './Styled';
const Main = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Theme.blue} />
      <ScrollViewStyled>
        <NavigationBar />
        <ViewStyled>
          <ShelfList />
        </ViewStyled>
      </ScrollViewStyled>
    </>
  );
};

export default Main;
