import { Box } from '@mui/material';
import React from 'react';
import { useState } from 'react';

interface IProps {
  className?: string;
  label: string;
  handleOnChange(label: string): void;
}

const Checkbox = ({ className, label, handleOnChange }: IProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleOnChange(label);
  };

  return (
    <Box className={className}>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
          data-testid="checkbox"
        />

        <span className="checkmark">{label}</span>
      </label>
    </Box>
  );
};

export default Checkbox;
