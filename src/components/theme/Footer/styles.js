import footerIllustration from 'assets/illustrations/test3.svg';
import footersecond from 'assets/illustrations/footerright.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0 4rem 0;
  background-image: url(${footerIllustration}), url(${footersecond});
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 3rem 0 2rem 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 680px) {
    text-align: center;
    align-items: center;
  }
`;

export const Details = styled.div`
  a {
    text-decoration: underline;
    box-shadow: none;
    background-image: none;
    text-shadow: none;
    transition: all .2s linear;

    &:hover {
      text-decoration: none;
      opacity: .5;
    }
  }

  p {
      @media (max-width: 680px) {
      margin-bottom: 1rem;
    }
  }
`;

export const BottomFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
  }

  div:nth-child(1) {
    @media (max-width: 680px) {
      order: 2;
    }

    a {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 680px) {
      order: 1;
      margin-bottom: 1rem;
      text-align: center;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 39px;
    }
  }

  a {
    box-shadow: none;
    background-image: none;
    transition: all .2s linear;

    &:hover {
      opacity: .5;
    }

    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }
  }
`;
