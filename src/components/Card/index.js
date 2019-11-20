import React, {useRef} from 'react';
import Proptypes from 'prop-types';
import {CardContainer,
  BrandsContainer,
  Numbers,
  Number,
  InfoContainer,
  Divider,
  SectionContainer,
  Image,
  ImageContainer} from './styled';
import Chip from '../../assets/chip.png';
import Visa from '../../assets/visa.png';
import Master from '../../assets/masterCard.png';
import Amex from '../../assets/amex.png';

import {ActiveBorder} from '../CardViewer/styled';
import {getBrand} from '../CardViewer/helpers';


// MasterCard 100 x 80
// Visa 100 x 50
// 20

const trunkText = (text) => text.length > 33 ?
  `${text.substring(0, 33)}...`.toUpperCase() :
  text.toUpperCase();

const rigthMonth = (month) => {
  if (month < 10) return `0${month}`;
  return month;
};

const getRefs = (maker) => {
  const payload = {
    Number: maker(null),
    Name: maker(null),
    Año: maker(null),
    Mes: maker(null),
  };
  return payload;
};

const getCordenates = (activeLabel, Refs) => {
  if (activeLabel) {
    if (Refs[activeLabel]) {
      const current = Refs[activeLabel].current;
      const {offsetHeight, offsetLeft, offsetTop, offsetWidth} = current;
      return [offsetTop, offsetLeft, offsetWidth, offsetHeight];
    }
  } return [0, 0, 0, 0];
};
// top, left, width, heigth -> activeBox
const Card = ({values, cordenates}) => {
  const Refs = getRefs(useRef);
  // const [activeBox, setActiveBox] = useState([0, 0, 0, 0]);
  const activeBrand = getBrand(values.Number);
  return (<CardContainer>
    <ActiveBorder cordenates={getCordenates(cordenates, Refs)} />
    <BrandsContainer>
      <img src={Chip} alt="Chip" style={{width: '50px', height: '50px'}} />
      {/* <img src={getBrand(values.Number)}
        alt="Brand"
        style={{width: '100px', height: '50px'}} /> */}
      {/* <img src={Visa} style={{width: '100px', height: '50px'}} /> */}
      <ImageContainer display={activeBrand === 'Visa' ? 'flex' : 'none'}>
        <Image width={100} height={50} src={Visa} />
      </ImageContainer>
      <ImageContainer display={activeBrand === 'Master' ? 'flex' : 'none'}>
        <Image width={100} height={80} src={Master} />
      </ImageContainer>
      <ImageContainer display={activeBrand === 'Amex' ? 'flex' : 'none'}>
        <Image width={100} height={100} src={Amex} />
      </ImageContainer>
    </BrandsContainer>
    <SectionContainer width={90} ref={Refs['Number']}>
      <Numbers>
        {Array(16).fill('#').map((item, i)=> <Number
          key={`Number-${i}`}
          endBlock={(i + 1) % 4 === 0}>{values.Number ?
          values.Number[i] ?
          values.Number[i] : '#' : '#' }</Number>)}
      </Numbers>
    </SectionContainer>
    <InfoContainer>
      <SectionContainer ref={Refs['Name']} width={80}>
        {trunkText(values.Name || 'NOMBRE DE MUESTRA')}
      </SectionContainer>
      <SectionContainer ref={Refs['Año']} width={9.75}>
        {values['Año'] || '0000'}
      </SectionContainer>
      <SectionContainer width={0.5}>
        <Divider>/</Divider>
      </SectionContainer>
      <SectionContainer ref={Refs['Mes']} width={9.75}>
        {rigthMonth(values['Mes']) || '00'}
      </SectionContainer>
    </InfoContainer>
  </CardContainer>);
};

Card.propTypes = {
  values: Proptypes.any,
  cordenates: Proptypes.string,
};

export default Card;
