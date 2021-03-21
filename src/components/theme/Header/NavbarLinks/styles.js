import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    box-shadow: none;

    background-image: none;
    text-shadow: none;
    transition: all .2s linear;

    &:hover {
      opacity: .5;
    }

		@media (max-width: 960px) {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      color: var(--dark);
		}
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
          margin-right: 1rem;
          font-size: 17px;
          font-weight: 700;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
