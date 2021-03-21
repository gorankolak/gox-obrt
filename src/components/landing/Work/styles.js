import styled from 'styled-components';

import test from 'assets/illustrations/worktop.svg';

export const Wrapper = styled.div`
  background-image: url(${test});
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const Workwrapper = styled.div`
  padding: 3rem 0 6rem;

  @media (max-width: 960px) {
    padding: 1rem 0 1rem;
  }

  h2 {
    position: relative;
    font-size: 2rem;
    margin-bottom: 3rem;

    &:after {
      content:'';
      position: absolute;
      width: 50px;
      height: 4px;
      background-color: lightgray;
      bottom: -2rem;
      left: 0;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;
`;
