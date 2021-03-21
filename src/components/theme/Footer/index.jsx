import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, BottomFooter, Details } from './styles';
// import social from './social.json';

import email from 'assets/icons/email-darkfinal.svg';
import facebook from 'assets/icons/facebook-darkfinal.svg';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h3>GOX</h3>
        <p>Obrt za završne radove u građevinarstvu <br/> vl. Goran Mamić<br/> Sunčana 9, 31403 Široko polje <br/>E: <a href="mailto:gox.obrt@gmail.com" rel="noopener noreferrer" target="_blank">gox.obrt@gmail.com</a></p>
      </Details>

      <BottomFooter>
        <div>
          <small>
            © Sva prava pridržana. | {new Date().getFullYear()} | Website
            by{' '}
            <a href="mailto:goran.kolak82@gmail.com" rel="noopener noreferrer" target="_blank">
              GK.
            </a>
          </small>
        </div>

        <div>
          <a href="mailto:gox.obrt@gmail.com" target="_blank" rel="noopener noreferrer">
            <img width="40" src={email} alt="email"/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img width="25" src={facebook} alt="facebook"/>
          </a>
        </div>
      </BottomFooter>
    </Flex>
  </Wrapper>
);
