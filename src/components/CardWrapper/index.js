import React from 'react';
import Proptypes from 'prop-types';
import {
  CardContainer,
  CardRelativeContainer} from './styled';
import Card from '../Card';
import CardBack from '../CardBack';


const CardWrapper = ({showBack, values, cordenates}) => {
  return ( <div>
    <CardRelativeContainer showBackground={showBack}>
      <CardContainer>
        <Card cordenates={cordenates} values={values} />
        <CardBack values={values} />
      </CardContainer>
    </CardRelativeContainer>
  </div>
  );
};

CardWrapper.propTypes = {
  showBack: Proptypes.bool.isRequired,
  values: Proptypes.any,
  cordenates: Proptypes.string,
};

export default CardWrapper;
