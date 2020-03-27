import React from 'react';
import {View, Text, Image} from 'react-native';
import {Book, BookThumbnail, BookTitle} from './Styled';
const BookItemList = props => {
  return (
    <Book>
      <BookThumbnail
        source={{uri: props.data.volumeInfo.imageLinks.thumbnail}}
      />
      <BookTitle>{props.data.volumeInfo.title}</BookTitle>
    </Book>
  );
};

export default BookItemList;
