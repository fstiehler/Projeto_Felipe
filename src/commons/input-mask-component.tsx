import React from 'react';
import { ClassAttributes, InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

export const InputMaskComponent = (
    props: any
  ) => {
    return (
      <InputMask
        {...props}
        mask="(99) 99999-9999"
        value={props.value}
        onChange={props.onChange}
      >
        {(
          inputProps: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLInputElement> &
            InputHTMLAttributes<HTMLInputElement>
        ) => <input {...inputProps} />}
      </InputMask>
    );
  };
  