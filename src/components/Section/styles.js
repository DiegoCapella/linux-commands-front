import styled, { css } from 'styled-components'

export const Section = styled.section``

export const Title = styled.h3`
  margin-top: 3rem;
`

export const Content = styled.div`
  margin: 1.5rem auto;
`

export const Command = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    background-color: ${theme.colors.primary};
    border-radius: 0.5rem;
    padding: 1rem;

    code {
      font-size: 1.8rem;

      &::before {
        content: '$';
        margin-right: 1rem;
      }
    }

    button {
      font-size: 1.8rem;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.9);
        background-color: ${theme.colors.darkGray};
        color: ${theme.colors.white};
      }
    }
  `}
`
