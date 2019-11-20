import React from 'react';
import Proptypes from 'prop-types';
import {Label,
  InputContainer, CustomInput} from './styled';

const validation = (value, label, isNumber, handleChange) => {
  if (isNumber) {
    const regex = /^[0-9\b]+$/;
    if (value === '' || regex.test(value)) {
      handleChange(value, label);
    }
  } else {
    const regex = /^[A-Za-z\s]+$/;
    if (value === '' || regex.test(value)) {
      handleChange(value, label);
    }
  }
};

const handleFocusInputs = (catchActive, label, ccv, handleFocus) => {
  catchActive(label);
  if (ccv) {
    handleFocus();
  }
};

const Input = (
    {col, label, handleFocus, handleBlur,
      ccv, disabled, handleChange, value, maxLength, onlyNumbers,
      validationNumber, catchActive},
) => {
  return (
    <InputContainer width={col * 8.3}>
      <Label>{label}</Label>
      <CustomInput
        onChange={(e) =>
          validation(e.target.value, label, onlyNumbers, handleChange)}
        disabled={disabled}
        type='text'
        value={validationNumber}
        // onClick={() => catchActive(label)}
        validationNumber
        maxLength={maxLength || ''}
        onFocus={() => handleFocusInputs(catchActive, label, ccv, handleFocus)}
        onBlur={() => ccv ? handleBlur() : null} />
    </InputContainer>);
};

Input.propTypes = {
  col: Proptypes.number.isRequired,
  label: Proptypes.string,
  handleFocus: Proptypes.func,
  handleBlur: Proptypes.func,
  ccv: Proptypes.bool,
  disabled: Proptypes.bool,
  handleChange: Proptypes.func,
  value: Proptypes.string,
  maxLength: Proptypes.number,
  onlyNumbers: Proptypes.bool,
  validationNumber: Proptypes.any.isRequired,
  catchActive: Proptypes.func,
};

Input.defaultProps = {
  ccv: false,
  disabled: false,
  value: ' ',
  onlyNumbers: false,
};

export default Input;
