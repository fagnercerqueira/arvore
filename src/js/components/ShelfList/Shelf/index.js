import React from 'react';
import {Text} from 'react-native';
import {ShelfWrapper} from './Styled';
const Shelf = props => {
  return (
    <ShelfWrapper backgroundColor={props.bgColor}>
      <Text>{props.title}</Text>
    </ShelfWrapper>
  );
};

export default Shelf;
