import React from 'react';
import {Text, View} from 'react-native';

import {ShelfWrapper, ShelfTitle} from './Styled';
import BookItemList from '../../BookItemList';
import Api from '../../../utils/Api';
import {connect} from 'react-redux';
import {updateShelfData} from '../../../actions';

/**
 *Shelf component
 *
 * @param {*} props
 * @returns
 */
const Shelf = props => {
  console.log('props', props);

  let getBooks = () => {
    Api.search(props.title, 1, props.qty)
      .then(res => {
        props.updateShelfData(props.idx, res.data.items);
      })
      .catch(err => console.log(err));
  };

  React.useEffect(() => {
    if (props.data === undefined) {
      getBooks();
    }
  });

  // let books;
  if (props.data === undefined) {
    console.log('Carregando');
    return <Text>Carregando...</Text>;
  } else {
    console.log('Carregado');
    return (
      <View>
        <ShelfTitle>{props.title}</ShelfTitle>
        <ShelfWrapper backgroundColor={props.bgColor} horizontal={true} showsHorizontalScrollIndicator={false}>
          {props.data.map((book, key) => (
            <BookItemList key={key} data={book}/>
          ))}
        </ShelfWrapper>
      </ View>
    );
  }
};

export default connect(
  null,
  {updateShelfData},
)(Shelf);
