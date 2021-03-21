import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/topright.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const Contactwrapper = styled.div`
  padding: 4rem 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 3rem;

  @media (max-width: 960px) {
    margin-bottom: 1rem;
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  textarea {
    margin-bottom: 0;
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

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    order: 2;
  }

  img {
    max-width: 100%;
  }
`;
