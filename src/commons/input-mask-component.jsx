import React from 'react';
import InputMask from 'react-input-mask';

const InputMaskComponent = (props) => {
  return (
    <InputMask
      {...props}
      mask="(99) 99999-9999"
      value={props.value}
      onChange={props.onChange}
    >
      {(inputProps) => <input {...inputProps} />}
    </InputMask>
  );
};

export default InputMaskComponent;
