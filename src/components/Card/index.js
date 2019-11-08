import React from 'react';
import Proptypes from 'prop-types';
import {CardContainer,
  BrandsContainer,
  NumbersContainer,
  Numbers,
  Number,
  InfoContainer} from './styled';
import Chip from '../../assets/chip.png';
// import Visa from '../../assets/visa.png';
import Master from '../../assets/masterCard.png';
import Input from '../Input';


// MasterCard 100 x 80
// Visa 100 x 50
// 20

const trunkText = (text) => text.length > 18 ?
  `${text.substring(0, 19)}...` : text;

const Card = ({values}) => {
  return (<CardContainer>
    <BrandsContainer>
      <img src={Chip} style={{width: '50px', height: '50px'}} />
      <img src={Master} style={{width: '100px', height: '80px'}} />
      {/* <img src={Visa} style={{width: '100px', height: '50px'}} /> */}
    </BrandsContainer>
    <NumbersContainer>
      <Numbers>
        {Array(16).fill('#').map((item, i)=> <Number
          key={`Number-${i}`}
          endBlock={(i + 1) % 4 === 0}>{values.Number ?
          values.Number[i] ?
          values.Number[i] : '#' : '#' }</Number>)}
      </Numbers>
    </NumbersContainer>
    <InfoContainer>
      <Input col={5.5}
        disabled={true} value={values.Name ? trunkText(values.Name) : ''} />
      <Input col={5.5} disabled={true} />
    </InfoContainer>
  </CardContainer>);
};

Card.propTypes = {
  values: Proptypes.any,
};

export default Card;
