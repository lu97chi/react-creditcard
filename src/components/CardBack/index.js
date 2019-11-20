import React from 'react';
import Proptypes from 'prop-types';
import Master from '../../assets/masterCard.png';
import {Band, CardContainer, CCVContainer, CCV} from './styled';

const CardBack = ({values}) => <CardContainer>
  <Band />
  <CCVContainer>
    <span style={{paddingRight: '12px'}}>ccv</span>
    <CCV>
      <span style={{paddingRight: '12px'}}>{values.CVV || ''}</span>
    </CCV>
    <img src={Master} style={{width: '80px', height: '60px'}} />
  </CCVContainer>
</CardContainer>
;

CardBack.propTypes = {
  values: Proptypes.any,
};

export default CardBack;
