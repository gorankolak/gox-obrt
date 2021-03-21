import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import testphoto from 'assets/photos/photo-1.jpg';
import testphoto2 from 'assets/photos/photo-2.jpg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h2>Kvaliteta i iskustvo</h2>
          <h1>Izvodimo završne radove u građevinarstvu</h1>
          <Button as={AnchorLink} href="#contact">
            Javite nam se
          </Button>
        </Details>
        <Thumbnail>
          <img src={testphoto} alt="TEsting" />
          <img src={testphoto} alt="TEsting" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
