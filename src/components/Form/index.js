import React from 'react';
import Proptypes from 'prop-types';
import {FormContainer, SubmitButton} from './styled';
import Input from '../Input';

const Form = ({throwCVV, removeCVV, setText}) => <FormContainer>
  <Input col={12}
    maxLength={16}
    handleChange={(value, id) => setText(value, id)}
    label="Number" />
  <Input col={12}
    label="Name"
    handleChange={(value, id) => setText(value, id)} />
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Input col={3.5} label="Year" />
    <Input col={3.5} label="Month"/>
    <Input col={3.5}
      handleChange={(value, id) => setText(value, id)}
      label="CVV"
      ccv={true}
      maxLength={4}
      handleFocus={() => throwCVV()}
      handleBlur={() => removeCVV()} />
  </div>
  <SubmitButton>SUBMIT</SubmitButton>
</FormContainer>
;

Form.propTypes = {
  throwCVV: Proptypes.func,
  removeCVV: Proptypes.func,
  setText: Proptypes.func,
};

export default Form;
