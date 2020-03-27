import React from 'react';
import {connect} from 'react-redux';
import Shelf from './Shelf';

const ShelfList = props => {
  return props.shelfs.map((item, key) => {
    return (
      <Shelf
        key={key}
        slug={item.slug}
        title={item.title}
        bgColor={item.bgColor}
        textColor={item.textColor}
        data={item.data}
      />
    );
  });
};

const mapStateToProps = state => ({
  shelfs: state.ShelfsReducer.shelfs,
});

export default connect(
  mapStateToProps,
  null,
)(ShelfList);
