import React from 'react';
import Proptypes from 'prop-types';
import {FormContainer, SubmitButton} from './styled';
import Input from '../Input';
import DropDown from '../Dropdown';

const Form = ({throwCVV, removeCVV, setText, values, catchActive, isValid}) => {
  return (<FormContainer>
    <Input col={12}
      maxLength={16}
      onlyNumbers
      catchActive={(ref) =>catchActive(ref)}
      validationNumber={values['Number'] || ''}
      handleChange={(value, id) => setText(value, id)}
      label="Number" />
    <Input col={12}
      label="Name"
      catchActive={(ref) =>catchActive(ref)}
      validationNumber={values['Name'] || ''}
      handleChange={(value, id) => setText(value, id)} />
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <DropDown
        items={[2022, 4423, 4234, 2342, 2432, 1234, 4123, 5232]}
        width={3.5}
        catchActive={(ref) =>catchActive(ref)}
        label='Año'
        handleSelect={(value, id) => setText(value, id)}
      />
      <DropDown
        label='Mes'
        catchActive={(ref) =>catchActive(ref)}
        items={[
          'Enero', 'Febrero', 'Marzo', 'Abril',
          'Mayo', 'Junio', 'Julio', 'Agosto',
          'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
        width={3.5}
        handleSelect={(value, id, index) => setText(index + 1, id)}
      />
      <Input col={3.5}
        handleChange={(value, id) => setText(value, id)}
        label="CVV"
        catchActive={(ref) =>catchActive(ref)}
        validationNumber={values['CVV'] || ''}
        ccv={true}
        onlyNumbers
        maxLength={4}
        handleFocus={() => throwCVV()}
        handleBlur={() => removeCVV()} />
    </div>
    <SubmitButton
      isValid={isValid}
      onClick={() => console.log(values)}
      disabled={!isValid}>SUBMIT</SubmitButton>
  </FormContainer>);
}
;

Form.propTypes = {
  throwCVV: Proptypes.func,
  removeCVV: Proptypes.func,
  setText: Proptypes.func,
  values: Proptypes.any,
  catchActive: Proptypes.func,
  isValid: Proptypes.bool,
};

export default Form;
