import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid var(--gold);
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
		border-color: var(--warn);
	`}

  &::placeholder {
    color: var(--grey);
  }
`;


export const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid var(--gold);
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
		border-color: var(--warn);
	`}

  &::placeholder {
    color: var(--grey);
  }
`;