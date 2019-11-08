import React from 'react';
import Proptypes from 'prop-types';
import {
  CardContainer,
  CardRelativeContainer} from './styled';
import Card from '../Card';
import CardBack from '../CardBack';


const CardWrapper = ({showBack, values}) => {
  return ( <div>
    <CardRelativeContainer showBackground={showBack}>
      <CardContainer>
        <Card values={values} />
        <CardBack values={values} />
      </CardContainer>
    </CardRelativeContainer>
  </div>
  );
};

CardWrapper.propTypes = {
  showBack: Proptypes.bool.isRequired,
  values: Proptypes.any,
};

export default CardWrapper;
