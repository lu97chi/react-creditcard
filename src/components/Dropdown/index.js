import React, {useState, useRef} from 'react';
import Proptyes from 'prop-types';
import useOutside from './useOutside';
import {DropdownContainer,
  SelectSelected, SelectSelectedContainer, Options, Option} from './styled';
import {Label} from '../Input/styled';
import Arrow from './arrow';


const handleClick =
  (item, index, label, setter, setActualValue, handleSelect) => {
    handleSelect(item, label, index);
    setActualValue(item);
    setter(false);
  };

const handleActiveElement = (ref, setter, handler) => {
  setter(true);
  handler(ref);
};

const DropDown = ({handleSelect, items, width, label, catchActive}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [actualValue, setActualValue] = useState('Seleccionar');
  useOutside(ref, () => setOpen(false));
  return (<DropdownContainer ref={ref}
    width={3.5 * 8.3} onFocus={() => catchActive(ref)}>
    <Label>{label}</Label>
    <SelectSelectedContainer
      border={open}
      onClick={() => handleActiveElement(label, setOpen, catchActive)}>
      <SelectSelected>{actualValue}</SelectSelected>
      <Arrow />
    </SelectSelectedContainer>
    <Options height={open ? `
    ${items.length > 5 ? 37 * 5 : 37 * items.length}px` : '0px'}>
      {items.map((item) => <Option
        key={item}
        onClick={() =>
          handleClick(item, items.indexOf(item), label,
              setOpen, setActualValue, handleSelect)}>
        {item}</Option>)}
    </Options>
  </DropdownContainer>);
};

DropDown.propTypes = {
  items: Proptyes.array.isRequired,
  width: Proptyes.number.isRequired,
  handleSelect: Proptyes.func.isRequired,
  label: Proptyes.string.isRequired,
  catchActive: Proptyes.func,
};

export default DropDown;
