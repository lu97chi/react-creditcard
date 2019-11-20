import React, {useState} from 'react';
import CardWrapper from '../CardWrapper';
import Form from '../Form';
import {Container} from './styled';
import {validateCreditCard} from '../Card/helpers';

const CardViewer = () => {
  const [CvvOpen, setCvvOpen] = useState(false);
  const [values, setValues] = useState({});
  const [cordenates, setCordenates] = useState('');
  // validateCreditCard(values.Number)
  return (<Container>
    <CardWrapper
      cordenates={cordenates}
      values={values}
      showBack={CvvOpen} />
    <Form
      isValid={validateCreditCard(values.Number)}
      catchActive={(label) => setCordenates(label)}
      // setCordenates([current.offsetLeft, current.offsetTop])}
      values={values}
      setText={(value, id, onlyNumbers) => setValues({...values, [id]: value})}
      throwCVV={() => setCvvOpen(true)}
      removeCVV={() => setCvvOpen(false)} />
  </Container>);
};

export default CardViewer;
