import styled from 'styled-components';

import introbottomleft from 'assets/illustrations/introleft2.svg';
import photo2 from 'assets/photos/photo-3.png';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background: url(${introbottomleft}) right bottom no-repeat, url(${photo2}) left bottom no-repeat;
  background-size: 100%;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 4rem 0 0;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 5rem;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2.5rem;
    padding: 0;
  }

  h1 {
    margin: 0 0 2.5rem 0;
    font-size: 48px;

    @media (max-width: 960px) {
      margin: 0 0 2rem 0;
    }

    @media (max-width: 680px) {
      /* font-size: 30pt; */
      font-size: 38px;
    }
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 21px;

    @media (max-width: 960px) {
      /* margin: 0 0 0.5rem 0; */
      font-size: 19px;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
    margin-bottom: 0;
  }

  img:first-child {
    filter: grayscale();
  }

  img:nth-child(2) {
    position: absolute;
    top: 4rem;
    right: 3rem;

    @media (max-width: 960px) {
      top: 2rem;
      right: 0.5rem;
    }
  }
`;
