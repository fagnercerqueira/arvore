import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import Shelf from './Shelf';

const ShelfList = props => {
  return props.shelfs.map((item, key) => {
    return (
      <Shelf
        key={key}
        idx={item.id}
        slug={item.slug}
        title={item.title}
        bgColor={item.bgColor}
        textColor={item.textColor}
        qty={item.qty}
        data={item.data}
      />
    );
  });
};

const mapStateToProps = state => ({
  shelfs: state.ShelfsReducer,
});

export default connect(
  mapStateToProps,
  null,
)(ShelfList);
