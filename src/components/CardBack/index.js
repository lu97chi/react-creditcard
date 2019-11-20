import React from 'react';
import Proptypes from 'prop-types';

import {Band, CardContainer, CCVContainer, CCV} from './styled';
import {getBrand} from '../CardViewer/helpers';

const CardBack = ({values}) => <CardContainer>
  <Band />
  <CCVContainer>
    <span style={{paddingRight: '12px'}}>ccv</span>
    <CCV>
      <span style={{paddingRight: '12px'}}>{values.CVV || ''}</span>
    </CCV>
    {console.log(values)}
    <img alt="Brand" src={getBrand(values.Number)}
      style={{width: '80px', height: '60px'}} />
  </CCVContainer>
</CardContainer>
;

CardBack.propTypes = {
  values: Proptypes.any,
};

export default CardBack;
