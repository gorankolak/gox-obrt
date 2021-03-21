import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/test2.svg';
import topleft from 'assets/illustrations/abouttopleft.svg';

export const Wrapper = styled.div`
  background-image: url(${topleft}), url(${detailsIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 3rem;

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

  @media (max-width: 960px) {
    margin-bottom: 2.5rem;
    padding-left: unset;
    width: 100%;
    order: 1;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    order: 2;
  }

  img {
    width: 100%;
  }
`;
