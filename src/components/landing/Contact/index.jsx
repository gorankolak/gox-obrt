import React from 'react';
import { Container } from 'components/common';
import mapGoxLarge from 'assets/photos/map-large.png'
import { Wrapper, Contactwrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper id="contact">
    <Contactwrapper as={Container}>
    <Details>
    <h2>Kontakt</h2>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={mapGoxLarge} alt="Gox obrt lokacija" />
    </Thumbnail>
    </Contactwrapper>
  </Wrapper>
);
