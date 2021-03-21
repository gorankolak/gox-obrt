import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, SkillsWrapper, Details, Thumbnail, Subtitle } from './styles';

import servPhoto from 'assets/photos/services_1.jpg'
import servPhoto2 from 'assets/photos/services_2.jpg'

import decorate from 'assets/icons/decorate-darkfinal.svg'
import fasade from 'assets/icons/fasad-work-darkfinal.svg'
import licwork from 'assets/icons/lic-work-darkfinal.svg'
import paintIndoor from 'assets/icons/paint-indoor-darkfinal.svg'
import paintOutdoor from 'assets/icons/paint-outdoor-darkfinal.svg'
import wallpaper from 'assets/icons/wallpaper-glue-darkfinal.svg'


export const Services = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="services">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={servPhoto} alt="Naše usluge" />
          <img src={servPhoto2} alt="Naše usluge" />
        </Thumbnail>
        <Details theme={theme}>
          <h2>Usluge koje pružamo</h2>
          <ul>
            <li>
              <Subtitle>
                <img src={paintIndoor} alt=""/>
                <h3>Bojanje interijera</h3>
              </Subtitle>
              <p>Bojanje zidova sa svim potrebnim predradnjama - zaštita i izravnavanje zidnih površina gletanjem, brušenje i grundiranje.</p>
            </li>
            <li>
              <Subtitle>
                <img src={decorate} alt=""/>
                <h3>Izrada dekoracija</h3>
              </Subtitle>
              <p>Različitim tehnikama postižemo imitacije stvarnih materijala - kao što su kamen, granit, mramor, imitacije metala, betona, pješčanih dina, svilene tkanine na zidu, drveta i sl.</p>
            </li>
            <li>
              <Subtitle>
                <img src={paintOutdoor} alt=""/>
                <h3>Bojanje eksterijera</h3>
              </Subtitle>
              <p>Bojanje eksterijera koje uključuje i sve potrebne predradnje. </p>
            </li>
            <li>
              <Subtitle>
                <img src={licwork} alt=""/>
                <h3>Ličilački radovi</h3>
              </Subtitle>
              <p>Ličilački radovi na starim i novim, te drvenim i metalnim površinama.</p>
            </li>
            <li>
              <Subtitle>
                <img src={fasade} alt=""/>
                <h3>Ostali fasaderski radovi</h3>
              </Subtitle>
              <p>Također uključuju armiranje i nanošenje završne zbuke.</p>
            </li>
            <li>
              <Subtitle>
                <img src={wallpaper} alt=""/>
                <h3>Ljepljenje tapeta</h3>
              </Subtitle>
              <p>Ljepljenje korištenjem najprikladnijih tehnika.</p>
            </li>
          </ul>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
