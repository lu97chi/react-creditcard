import React, {useState} from 'react';
import Proptypes from 'prop-types';
import {Label,
  InputContainer, CustomInput, CustomInputValue, CustomSpan} from './styled';


const Input = (
    {col, label, handleFocus, handleBlur,
      ccv, disabled, handleChange, value, maxLength},
) => {
  const [isAnimation] = useState(false);
  return (
    <InputContainer width={col * 8.3}>
      <Label>{label}</Label>
      {
        disabled ? <CustomInputValue>
          <CustomSpan isAnimation={isAnimation}>{value}</CustomSpan>
        </CustomInputValue> :<CustomInput
          onChange={(e) => handleChange(e.target.value, label)}
          disabled={disabled}
          type="text"
          maxLength={maxLength || ''}
          onFocus={() => ccv ? handleFocus() : null}
          onBlur={() => ccv ? handleBlur() : null} />
      }

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
};

Input.defaultProps = {
  ccv: false,
  disabled: false,
  value: ' ',
};

export default Input;
