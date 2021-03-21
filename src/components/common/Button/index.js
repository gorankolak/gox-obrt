import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: var(--gold);
  border: 2px solid var(--gold);
  text-shadow: none;
  box-shadow: 0 20px 30px 0 rgb(12 0 46 / 10%);
  transition: all .2s linear;

  &:hover {
    background-color: #fff;
    color: var(--gold);
    border: 2px solid var(--gold);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }
`;
