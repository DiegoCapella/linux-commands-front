import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.darkGray};
    color: ${theme.colors.white};
    padding: 2rem 0;

    span {
      margin-right: 0.5rem;
    }

    p {
      margin-left: 0.5rem;
    }
  `}
`
