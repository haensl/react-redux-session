import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { addItem } from '../App/actions';

const ItemInput = ({
  onButtonClick
}) => {
  const [itemLabel, setItemLabel] = useState('');

  return (
    <div className="ItemInput">
      <TextField
        onChange={ (event) => {
          const value = event.target.value;
          setItemLabel(value);
        }}
      />
      <Button
        onClick={ onButtonClick.bind(null, itemLabel) }
      >Add { itemLabel }</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (itemText) => {
    dispatch(addItem(itemText));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ItemInput);
