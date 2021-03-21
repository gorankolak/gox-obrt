import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--light);
`;

export const SkillsWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 1rem 0 0;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 3rem;
  text-align: center;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
    order: 1;
  }

  h2 {
    position: relative;
    font-size: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 960px) {
      margin-bottom: 1rem;
    }

    &:after {
      content:'';
      position: absolute;
      width: 50px;
      height: 4px;
      background-color: lightgray;
      bottom: -2.5rem;
      right: 0;
      left: 0;
      margin: auto;

      @media (max-width: 960px) {
        bottom: -2rem;
      }
    }
  }

  ul {
    margin-left: 0;

    @media (max-width: 960px) {
      margin-bottom: 2.5rem;
    }
  }

  ul li {
    margin-bottom: 0;
    list-style-type: none;
  }
`;

export const Subtitle = styled.div`
  text-align: center;
  
  img {
    margin: 2rem 0 0;
  }

  h3 {
    margin: 0.75rem 0;
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
    order: 2;
  }

  img {
    width: 100%;
  }
`;
