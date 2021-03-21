import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import aboutPhoto from 'assets/about/about-photo.jpg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={aboutPhoto} alt="Team" />
        </Thumbnail>
        <Details theme={theme}>
          <h2>O nama</h2>
          <p>Višegodišnje iskustvo rada u Hrvatskoj i inozemstvu, kao i sama kvaliteta izvedbe, može se primjetiti već samim pogledom na fotografije nekih od naših radova koje smo ovdje izdvojili.</p>
          <p>Radimo efikasno, u malom timu, a za potrebe poslova većeg obujma, također surađujemo i sa mrežom naših poslovnih suradnika i partnera.</p>
          <Button as={AnchorLink} href="#contact">
            Javite nam se
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
