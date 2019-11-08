import React, {useState} from 'react';
import CardWrapper from '../CardWrapper';
import Form from '../Form';
import {Container} from './styled';

const CardViewer = () => {
  const [CvvOpen, setCvvOpen] = useState(false);
  const [values, setValues] = useState({});
  return (<Container>
    <CardWrapper values={values} showBack={CvvOpen} />
    <Form
      setText={(value, id) => setValues({[id]: value})}
      throwCVV={() => setCvvOpen(true)}
      removeCVV={() => setCvvOpen(false)} />
  </Container>);
};

export default CardViewer;
